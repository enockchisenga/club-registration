import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Award, FileText } from "lucide-react";
import { User, Club, Member } from "@/types";

interface DashboardProps {
  user: User;
  clubs: Club[];
  members: Member[];
}

export function Dashboard({ user, clubs, members }: DashboardProps) {
  const stats = [
    { label: "Total Clubs", value: clubs.length, icon: Building2, color: "bg-emerald-100 text-emerald-600" },
    { label: "Total Members", value: members.length, icon: Users, color: "bg-blue-100 text-blue-600" },
    { label: "Certificates Issued", value: clubs.filter(c => c.certificate).length, icon: Award, color: "bg-amber-100 text-amber-600" },
    { label: "Active Users", value: 1, icon: FileText, color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600">Welcome back, {user.fullName}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Recent Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            {clubs.length === 0 ? (
              <p className="text-slate-500 text-sm">No clubs registered yet</p>
            ) : (
              <div className="space-y-4">
                {clubs.slice(0, 5).map((club) => (
                  <div key={club.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{club.name}</p>
                      <p className="text-sm text-slate-600">{club.village}, {club.ward}</p>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                      {club.certificate}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">District</span>
                <span className="text-sm font-medium text-slate-900">{user.district}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Local Authority</span>
                <span className="text-sm font-medium text-slate-900">{user.localAuthority}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">User Role</span>
                <span className="text-sm font-medium text-slate-900">{user.role}</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">System Status</span>
                <span className="text-sm font-medium text-emerald-600">● Online</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}