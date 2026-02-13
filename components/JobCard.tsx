import { Job } from '@/types/job';
import { MapPin, Clock, ExternalLink, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const locationColors: Record<string, string> = {
    'Office-based': 'bg-blue-100 text-blue-800',
    'Hybrid': 'bg-purple-100 text-purple-800',
    'Remote': 'bg-green-100 text-green-800',
  };

  return (
    <div
      className={cn(
        "group bg-white rounded-2xl border border-border overflow-hidden hover-lift animate-fade-in",
        job.featured && "ring-2 ring-accent/20"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {job.featured && (
        <div className="bg-accent text-white text-xs font-semibold px-4 py-1.5 inline-block rounded-br-lg">
          Featured
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
              {job.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {job.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
                locationColors[job.location] || 'bg-gray-100 text-gray-800'
              )}>
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                <Clock className="w-3.5 h-3.5" />
                {job.type}
              </span>
            </div>
          </div>

          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Details - Always Visible */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                Qualifications
              </h4>
              <ul className="space-y-2">
                {job.qualifications.map((qual, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
