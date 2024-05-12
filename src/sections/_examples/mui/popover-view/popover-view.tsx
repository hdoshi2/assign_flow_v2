'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CustomPopover, { usePopover, ArrowPositionType } from 'src/components/custom-popover';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export default function View() {
  const [arrow, setArrow] = useState<ArrowPositionType>('top-left');

  const clickPopover = usePopover();

  const hoverPopover = usePopover();

  const customizedPopover = usePopover();

  const handleChangeArrow = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setArrow(event.target.value as ArrowPositionType);
  }, []);

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Popover"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Popover' },
          ]}
          moreLink={['https://mui.com/components/popover']}
        />
      </ComponentHero>

      <ComponentContainer
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
        }}
      >
        <ComponentBlock title="Click">
          <Button variant="contained" onClick={clickPopover.onOpen}>
            Open Popover
          </Button>
          <Popover
            open={!!clickPopover.open}
            anchorEl={clickPopover.open}
            onClose={clickPopover.onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Box sx={{ p: 2, maxWidth: 280 }}>
              <Typography variant="subtitle1" gutterBottom>
                Etiam feugiat lorem non metus
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
              </Typography>
            </Box>
          </Popover>
        </ComponentBlock>

        <ComponentBlock title="Hover">
          <Typography
            aria-owns={hoverPopover.open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={hoverPopover.onOpen}
            onMouseLeave={hoverPopover.onClose}
          >
            Hover with a Popover.
          </Typography>

          <Popover
            disableRestoreFocus
            id="mouse-over-popover"
            open={!!hoverPopover.open}
            anchorEl={hoverPopover.open}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={hoverPopover.onClose}
            sx={{ pointerEvents: 'none' }}
          >
            <Box sx={{ p: 2, maxWidth: 280 }}>
              <Typography variant="subtitle1" gutterBottom>
                Etiam feugiat lorem non metus
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
              </Typography>
            </Box>
          </Popover>
        </ComponentBlock>

        <ComponentBlock title="Customized">
          <Button variant="contained" onClick={customizedPopover.onOpen}>
            Open Customized
          </Button>

          <FormControl>
            <FormLabel sx={{ typography: 'body2' }}>Arrow</FormLabel>
            <RadioGroup value={arrow} onChange={handleChangeArrow}>
              {[
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
                'left-top',
                'left-center',
                'left-bottom',
                'right-top',
                'right-center',
                'right-bottom',
              ].map((position) => (
                <FormControlLabel
                  key={position}
                  value={position}
                  control={<Radio />}
                  label={position}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <CustomPopover
            open={customizedPopover.open}
            onClose={customizedPopover.onClose}
            arrow={arrow}
          >
            <Box sx={{ p: 2, maxWidth: 280 }}>
              <Typography variant="subtitle1" gutterBottom>
                Etiam feugiat lorem non metus
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
              </Typography>
            </Box>
          </CustomPopover>
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
