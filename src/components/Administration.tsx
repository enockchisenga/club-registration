import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, DistrictConfig } from "@/types";

interface AdministrationProps {
  users: User[];
  districtConfigs: DistrictConfig[];
}

export function Administration({ users, districtConfigs }: AdministrationProps) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Administration</h1>
        <p className="text-slate-600">Manage system users and configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">System Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-slate-900">{user.fullName}</p>
                  <p className="text-sm text-slate-600">{user.username} • {user.role}</p>
                  <p className="text-sm text-slate-600">{user.district} • {user.localAuthority}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">District Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {districtConfigs.map((config) => (
                <div key={config.district} className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-slate-900">{config.district}</p>
                  <p className="text-sm text-slate-600">{config.localAuthority}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}