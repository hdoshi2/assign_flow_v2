'use client';

import Iconify from '../iconify';
import { StyledToaster } from './styles';
import { toasterClasses } from './classes';

// ----------------------------------------------------------------------

export default function Toaster() {
  return (
    <StyledToaster
      expand
      gap={12}
      closeButton
      offset={16}
      position="top-right"
      className={toasterClasses.root}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: toasterClasses.toast,
          icon: toasterClasses.icon,
          // content
          content: toasterClasses.content,
          title: toasterClasses.title,
          description: toasterClasses.description,
          // button
          actionButton: toasterClasses.actionButton,
          cancelButton: toasterClasses.cancelButton,
          closeButton: toasterClasses.closeButton,
          // state
          error: toasterClasses.error,
          success: toasterClasses.success,
          warning: toasterClasses.warning,
          info: toasterClasses.info,
        },
      }}
      icons={{
        info: <Iconify icon="eva:info-fill" width={24} />,
        success: <Iconify icon="eva:checkmark-circle-2-fill" width={24} />,
        warning: <Iconify icon="eva:alert-triangle-fill" width={24} />,
        error: <Iconify icon="solar:danger-bold" width={24} />,
        loading: <Iconify icon="solar:danger-bold" width={24} />,
      }}
    />
  );
}
