import { Timer, Gauge, Wallet } from "lucide-react";

export default function PrepInfoWithIcons() {
  return (
    <div className="flex gap-4">
      <div className="flex gap-1">
        <div>
          <Timer />
        </div>
        <div>
          <h1 className="text-[8px] font-bold">TOTAL TIME</h1>
          <p className="text-[8px] text-[#ffb700] font-bold">10 minutes</p>
        </div>
      </div>
      <div className="flex gap-1">
        <div>
          <Gauge />
        </div>
        <div>
          <h1 className="text-[8px] font-bold">LEVEL</h1>
          <p className="text-[8px] text-[#ffb700] font-bold">intermediate</p>
        </div>
      </div>
      <div className="flex gap-1">
        <div>
          <Wallet />
        </div>
        <div>
          <h1 className="text-[8px] font-bold">BUDGET</h1>
          <p className="text-[8px] text-[#ffb700] font-bold">under $2</p>
        </div>
      </div>
    </div>
  );
}
