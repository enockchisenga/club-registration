import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function System() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">System</h1>
        <p className="text-slate-600">System information and maintenance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Version</span>
                <span className="text-sm font-medium text-slate-900">1.0.0</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Database Status</span>
                <span className="text-sm font-medium text-emerald-600">● Connected</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Last Backup</span>
                <span className="text-sm font-medium text-slate-900">Not yet backed up</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Database Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full">Backup Database</Button>
              <Button variant="outline" className="w-full">Restore Database</Button>
              <Button variant="outline" className="w-full">Data Verification</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}