import bcrypt from 'bcryptjs';
import { Admin } from '../models/Admin.js';
import { ApiError } from '../utils/ApiError.js';
import { signAdminToken } from '../utils/jwt.js';

function sanitizeAdmin(admin) {
  if (!admin) {
    return null;
  }

  const plain = admin.toObject ? admin.toObject() : admin;
  delete plain.password;
  return plain;
}

export async function registerInitialAdmin({ fullName, email, password, phone }) {
  const existingAdmins = await Admin.countDocuments();

  if (existingAdmins > 0) {
    throw new ApiError(403, 'Admin registration is only allowed during initial setup');
  }

  const existingEmail = await Admin.findOne({ email });
  if (existingEmail) {
    throw new ApiError(409, 'Admin already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await Admin.create({
    fullName,
    email,
    password: hashedPassword,
    phone,
    role: 'super_admin',
  });

  const accessToken = signAdminToken({ adminId: admin._id.toString(), role: admin.role });

  return { admin: sanitizeAdmin(admin), accessToken };
}

export async function loginAdmin({ email, password }) {
  const admin = await Admin.findOne({ email }).select('+password');

  if (!admin || !admin.isActive) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  admin.lastLogin = new Date();
  await admin.save({ validateBeforeSave: false });

  const accessToken = signAdminToken({ adminId: admin._id.toString(), role: admin.role });

  return { admin: sanitizeAdmin(admin), accessToken };
}

