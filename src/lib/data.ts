import { User, Club, Member, AuditLog, DistrictConfig } from "@/types";

export const districtConfigs: DistrictConfig[] = [
  { district: "CHEMBE", localAuthority: "CHEMBE TOWN COUNCIL" },
  { district: "KASAMA", localAuthority: "KASAMA MUNICIPAL COUNCIL" },
  { district: "MPIKA", localAuthority: "MPIKA TOWN COUNCIL" },
  { district: "CHINSALI", localAuthority: "CHINSALI TOWN COUNCIL" },
  { district: "LUNDAZI", localAuthority: "LUNDAZI TOWN COUNCIL" },
];

export const initialUsers: User[] = [
  {
    id: "USR-000001",
    fullName: "John Banda",
    username: "admin",
    password: "admin123",
    phone: "0977123456",
    district: "CHEMBE",
    localAuthority: "CHEMBE TOWN COUNCIL",
    role: "ADMINISTRATOR",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
  },
];

export const initialClubs: Club[] = [
  {
    id: "CLUB-000001",
    name: "KAPEPULA WOMEN CLUB",
    district: "CHEMBE",
    localAuthority: "CHEMBE TOWN COUNCIL",
    ward: "KAPWEPWE",
    village: "KAPEPULA",
    certificate: "CTC/CCR/2080/2026",
    registeredBy: "USR-000001",
    registrationDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

export const initialMembers: Member[] = [
  {
    id: "MEM-000001",
    clubId: "CLUB-000001",
    name: "Mary Phiri",
    position: "CHAIRPERSON",
    nrc: "123456/78/1",
    dateOfBirth: "1985-03-15",
    phone: "0977123456",
  },
];

export const initialAuditLogs: AuditLog[] = [
  {
    id: "LOG-000001",
    userId: "USR-000001",
    action: "SYSTEM INITIALIZED",
    details: "System initialized with default data",
    timestamp: new Date().toISOString(),
  },
];