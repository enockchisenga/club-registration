import { useState, useEffect } from "react";
import { LoginPage } from "@/components/LoginPage";
import { RegisterPage } from "@/components/RegisterPage";
import { Dashboard } from "@/components/Dashboard";
import { ClubRegistration } from "@/components/ClubRegistration";
import { RegisteredClubs } from "@/components/RegisteredClubs";
import { Certificates } from "@/components/Certificates";
import { Reports } from "@/components/Reports";
import { Administration } from "@/components/Administration";
import { Security } from "@/components/Security";
import { System } from "@/components/System";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { User, Club, Member, AuditLog, DistrictConfig } from "@/types";
import { districtConfigs, initialUsers, initialClubs, initialMembers, initialAuditLogs } from "@/lib/data";
import { generateId, generateCertificateNumber } from "@/lib/helpers";

type Page = "dashboard" | "register-club" | "registered-clubs" | "certificates" | "reports" | "administration" | "security" | "system";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [clubs, setClubs] = useState<Club[]>(initialClubs);
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(initialAuditLogs);
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [isRegistering, setIsRegistering] = useState(false);
  const [certificateCounter, setCertificateCounter] = useState(2080);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const user = users.find(u => u.id === savedUser);
      if (user) setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", currentUser.id);
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const handleLogin = (username: string, password: string) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      addAuditLog(user.id, "USER LOGIN", "User logged in successfully");
      setCurrentPage("dashboard");
      return true;
    }
    return false;
  };

  const handleRegister = (userData: Omit<User, "id" | "status" | "createdAt">) => {
    const newUser: User = {
      ...userData,
      id: generateId("USR"),
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
    };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    addAuditLog(newUser.id, "USER CREATED", "New account created");
    setCurrentPage("dashboard");
  };

  const addAuditLog = (userId: string, action: string, details: string) => {
    const log: AuditLog = {
      id: generateId("LOG"),
      userId,
      action,
      details,
      timestamp: new Date().toISOString(),
    };
    setAuditLogs(prev => [log, ...prev]);
  };

  const handleRegisterClub = (clubData: Omit<Club, "id" | "certificate" | "registeredBy" | "registrationDate" | "createdAt">) => {
    if (!currentUser) return;
    const certNumber = generateCertificateNumber(certificateCounter, new Date().getFullYear());
    const newClub: Club = {
      ...clubData,
      id: generateId("CLUB"),
      certificate: certNumber,
      registeredBy: currentUser.id,
      registrationDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    setClubs([...clubs, newClub]);
    setCertificateCounter(prev => prev + 1);
    addAuditLog(currentUser.id, "CLUB REGISTERED", `Club ${newClub.name} registered with certificate ${certNumber}`);
    setCurrentPage("registered-clubs");
  };

  const handleAddMember = (clubId: string, memberData: Omit<Member, "id" | "clubId">) => {
    const newMember: Member = {
      ...memberData,
      id: generateId("MEM"),
      clubId,
    };
    setMembers([...members, newMember]);
    if (currentUser) {
      addAuditLog(currentUser.id, "MEMBER ADDED", `Member ${newMember.name} added to club`);
    }
  };

  const handleLogout = () => {
    if (currentUser) {
      addAuditLog(currentUser.id, "USER LOGOUT", "User logged out");
    }
    setCurrentUser(null);
    setIsRegistering(false);
  };

  if (!currentUser) {
    if (isRegistering) {
      return <RegisterPage onRegister={handleRegister} onBack={() => setIsRegistering(false)} />;
    }
    return <LoginPage onLogin={handleLogin} onRegister={() => setIsRegistering(true)} />;
  }

  const districtConfig = districtConfigs.find(d => d.district === currentUser.district);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header user={currentUser} districtConfig={districtConfig} onLogout={handleLogout} />
      <div className="flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 p-6 lg:p-8">
          {currentPage === "dashboard" && <Dashboard user={currentUser} clubs={clubs} members={members} />}
          {currentPage === "register-club" && <ClubRegistration onRegister={handleRegisterClub} />}
          {currentPage === "registered-clubs" && <RegisteredClubs clubs={clubs} members={members} onAddMember={handleAddMember} />}
          {currentPage === "certificates" && <Certificates clubs={clubs} />}
          {currentPage === "reports" && <Reports clubs={clubs} members={members} />}
          {currentPage === "administration" && <Administration users={users} districtConfigs={districtConfigs} />}
          {currentPage === "security" && <Security auditLogs={auditLogs} />}
          {currentPage === "system" && <System />}
        </main>
      </div>
    </div>
  );
}