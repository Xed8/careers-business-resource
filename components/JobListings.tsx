import { jobs } from '@/data/jobs';
import JobCard from './JobCard';
import { Briefcase, Users } from 'lucide-react';

export default function JobListings() {
  const openRoles = jobs.filter(job => job.category === 'open');
  const poolingRoles = jobs.filter(job => job.category === 'pooling');

  return (
    <div className="space-y-20">
      {/* Open Roles Section */}
      <section id="open-roles" className="scroll-mt-24">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Open Roles</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                {openRoles.length} position{openRoles.length !== 1 ? 's' : ''} available — Apply now!
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {openRoles.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* Pooling Section */}
      <section id="pooling" className="scroll-mt-24">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Roles for Pooling</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                {poolingRoles.length} position{poolingRoles.length !== 1 ? 's' : ''} — Submit your application for future opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {poolingRoles.map((job, index) => (
            <JobCard key={job.id} job={job} index={index + openRoles.length} />
          ))}
        </div>
      </section>
    </div>
  );
}
