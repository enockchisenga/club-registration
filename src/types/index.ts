export interface User {
  id: string;
  fullName: string;
  username: string;
  password: string;
  phone: string;
  district: string;
  localAuthority: string;
  role: string;
  status: string;
  createdAt: string;
}

export interface Club {
  id: string;
  name: string;
  district: string;
  localAuthority: string;
  ward: string;
  village: string;
  certificate: string;
  registeredBy: string;
  registrationDate: string;
  createdAt: string;
}

export interface Member {
  id: string;
  clubId: string;
  name: string;
  position: string;
  nrc: string;
  dateOfBirth: string;
  phone: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: string;
}

export interface DistrictConfig {
  district: string;
  localAuthority: string;
}