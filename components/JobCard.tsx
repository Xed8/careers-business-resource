import { Job } from '@/types/job';
import { MapPin, Clock, ExternalLink, Briefcase, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const locationColors: Record<string, string> = {
    'Office-based': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Hybrid': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Remote': 'bg-green-500/20 text-green-300 border-green-500/30',
  };

  return (
    <div
      className={cn(
        "group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-primary/30 transition-all duration-300",
        job.featured && "ring-1 ring-primary/50"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {job.featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-background text-xs font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
            <Zap className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {job.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
              {job.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border",
                locationColors[job.location] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
              )}>
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-gray-300 border border-white/5">
                <Clock className="w-3.5 h-3.5" />
                {job.type}
              </span>
            </div>
          </div>

          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(255,193,7,0.4)] whitespace-nowrap self-start"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Details - Always Visible */}
        <div className="mt-8 pt-8 border-t border-white/10 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Key Responsibilities
            </h4>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Qualifications
            </h4>
            <ul className="space-y-3">
              {job.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  {qual}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for icon
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
