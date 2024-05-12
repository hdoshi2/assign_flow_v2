'use client';

import { paths } from 'src/routes/paths';

import { _jobs } from 'src/_mock';
import { MainContent } from 'src/layouts/dashboard';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import JobNewEditForm from '../job-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function JobEditView({ id }: Props) {
  const settings = useSettingsContext();

  const currentJob = _jobs.find((job) => job.id === id);

  return (
    <MainContent maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Job',
            href: paths.dashboard.job.root,
          },
          { name: currentJob?.title },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <JobNewEditForm currentJob={currentJob} />
    </MainContent>
  );
}
