import { Building2, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User as UserType, DistrictConfig } from "@/types";

interface HeaderProps {
  user: UserType;
  districtConfig?: DistrictConfig;
  onLogout: () => void;
}

export function Header({ user, districtConfig, onLogout }: HeaderProps) {
  return (
    <header className="bg-emerald-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">
              {user.localAuthority}
            </h1>
            <p className="text-sm text-emerald-200">
              CLUB REGISTRATION MANAGEMENT SYSTEM
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium">District: {user.district}</p>
            <p className="text-sm text-emerald-200">User: {user.fullName}</p>
          </div>
          <Button
            variant="ghost"
            className="text-white hover:bg-emerald-700"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}