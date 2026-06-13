interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function InfoCard({ icon, title, subtitle }: InfoCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-gray-50 rounded-xl p-3">
      <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-600">
        {icon}
      </div>
      <p className="text-[13px] font-medium text-gray-900 leading-tight">
        {title}
      </p>
      <p className="text-[11px] text-gray-400 leading-tight">{subtitle}</p>
    </div>
  );
}

export function ModalInfoCards() {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        De ce să comanzi
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <InfoCard
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="15" height="13" rx="1" />
              <path d="M16 8h4l3 5v3h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          }
          title="Livrare gratuită"
          subtitle="La comenzi peste 350 LEI"
        />
        <InfoCard
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          }
          title="1–5 zile lucrătoare"
          subtitle="Fără costuri ascunse"
        />
        <InfoCard
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          }
          title="Schimb în 15 zile"
          subtitle="Fără întrebări"
        />
        <InfoCard
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          }
          title="Calitate garantată"
          subtitle="Verificat înainte de livrare"
        />
      </div>
    </div>
  );
}
