import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuditLog } from "@/types";

interface SecurityProps {
  auditLogs: AuditLog[];
}

export function Security({ auditLogs }: SecurityProps) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Security</h1>
        <p className="text-slate-600">System security and audit trail</p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Activity / Audit Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditLogs.map((log) => (
              <div key={log.id} className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">{log.action}</p>
                    <p className="text-sm text-slate-600">{log.details}</p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {new Date(log.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}