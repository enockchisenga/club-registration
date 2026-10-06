import {
  LayoutDashboard,
  ClipboardList,
  FileText,
  BarChart3,
  Database,
  Settings,
  Shield,
  Info,
  Building2,
  Users,
  UserPlus,
  Pencil,
  Eye,
  Award,
  Search,
  Printer,
  BookOpen,
  MapPin,
  Home,
  Calendar,
  Download,
  UserCog,
  KeyRound,
  Activity,
  History,
  Lock,
  LogOut,
  Server,
  HardDrive,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Page = "dashboard" | "register-club" | "registered-clubs" | "certificates" | "reports" | "administration" | "security" | "system";

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

interface MenuItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  page?: Page;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    page: "dashboard",
  },
  {
    label: "Club Registration",
    icon: ClipboardList,
    children: [
      { label: "Register New Club", icon: UserPlus, page: "register-club" },
      { label: "Registered Clubs", icon: Users, page: "registered-clubs" },
      { label: "Edit Club", icon: Pencil, page: "registered-clubs" },
      { label: "View Club", icon: Eye, page: "registered-clubs" },
      { label: "Club Members", icon: Users, page: "registered-clubs" },
    ],
  },
  {
    label: "Certificates",
    icon: Award,
    children: [
      { label: "Generate Certificate", icon: FileText, page: "certificates" },
      { label: "Search Certificate", icon: Search, page: "certificates" },
      { label: "Print Certificate", icon: Printer, page: "certificates" },
      { label: "Certificate Register", icon: BookOpen, page: "certificates" },
    ],
  },
  {
    label: "Reports",
    icon: BarChart3,
    children: [
      { label: "Club Register", icon: BookOpen, page: "reports" },
      { label: "Members Register", icon: Users, page: "reports" },
      { label: "Clubs by Ward", icon: MapPin, page: "reports" },
      { label: "Clubs by Village", icon: Home, page: "reports" },
      { label: "Clubs by Date", icon: Calendar, page: "reports" },
      { label: "Certificate Report", icon: FileText, page: "reports" },
      { label: "Export Report", icon: Download, page: "reports" },
    ],
  },
  {
    label: "Database",
    icon: Database,
    children: [
      { label: "Database Records", icon: Database, page: "system" },
      { label: "Backup Database", icon: HardDrive, page: "system" },
      { label: "Restore Database", icon: Server, page: "system" },
      { label: "Data Verification", icon: Shield, page: "system" },
    ],
  },
  {
    label: "Administration",
    icon: Settings,
    children: [
      { label: "Users", icon: Users, page: "administration" },
      { label: "User Roles", icon: UserCog, page: "administration" },
      { label: "District Settings", icon: Building2, page: "administration" },
      { label: "Local Authority Settings", icon: Building2, page: "administration" },
      { label: "Wards", icon: MapPin, page: "administration" },
      { label: "Positions", icon: UserCog, page: "administration" },
      { label: "Registration Settings", icon: Settings, page: "administration" },
    ],
  },
  {
    label: "Security",
    icon: Shield,
    children: [
      { label: "Change Password", icon: KeyRound, page: "security" },
      { label: "Activity/Audit Log", icon: Activity, page: "security" },
      { label: "Login History", icon: History, page: "security" },
      { label: "Lock System", icon: Lock, page: "security" },
      { label: "Logout", icon: LogOut, page: "dashboard" },
    ],
  },
  {
    label: "System",
    icon: Info,
    children: [
      { label: "System Information", icon: Info, page: "system" },
      { label: "Backup Status", icon: HardDrive, page: "system" },
      { label: "Database Status", icon: Database, page: "system" },
      { label: "Settings", icon: Wrench, page: "system" },
    ],
  },
];

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <div className="mb-2">
                <div className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
                <div className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => child.page && onPageChange(child.page)}
                      className={cn(
                        "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors",
                        currentPage === child.page
                          ? "bg-emerald-50 text-emerald-700 font-medium"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <child.icon className="w-4 h-4" />
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={() => item.page && onPageChange(item.page)}
                className={cn(
                  "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors",
                  currentPage === item.page
                    ? "bg-emerald-50 text-emerald-700 font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}