import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const MiniLogo = forwardRef(({ disabledLink = false, sx }, ref) => {
  const logo = (
    <Box sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
      <svg viewBox="0 0 93.41200256347656 99" height={40} width={40}>
        <g>
          <svg
            viewBox="0 0 93.41230538960505 93.41230538960505"
            height="93.41230538960505"
            width="93.41230538960505"
          >
            <g>
              <svg />
            </g>
            <g id="icon-0">
              <svg
                viewBox="0 0 93.41230538960505 93.41230538960505"
                height="93.41230538960505"
                width="93.41230538960505"
              >
                <g>
                  <path
                    d="M0 46.706c0-25.795 20.911-46.706 46.706-46.706 25.795 0 46.706 20.911 46.706 46.706 0 25.795-20.911 46.706-46.706 46.706-25.795 0-46.706-20.911-46.706-46.706zM46.706 87.87c22.734 0 41.164-18.43 41.164-41.164 0-22.734-18.43-41.164-41.164-41.164-22.734 0-41.164 18.43-41.164 41.164 0 22.734 18.43 41.164 41.164 41.164z"
                    data-fill-palette-color="tertiary"
                    fill="#000"
                    stroke="transparent"
                  />
                </g>
                <g transform="matrix(1,0,0,1,33.07764888096914,23.216282120042667)">
                  <svg
                    viewBox="0 0 27.257007627666766 46.97974114951972"
                    height="46.97974114951972"
                    width="27.257007627666766"
                  >
                    <g>
                      <svg
                        x="0"
                        y="0"
                        viewBox="21.679107666015625 1 56.85826873779297 98"
                        enable-background="new 0 0 100 100"
                        height="46.97974114951972"
                        width="27.257007627666766"
                        class="icon-b-0"
                        data-fill-palette-color="accent"
                        id="b-0"
                      >
                        <g fill="#748789" data-fill-palette-color="accent">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M30.545 28.822C29.38 36.039 30.875 43.672 37.045 47.863 30.758 19.81 45.756 8.664 59.646 1 43.466 24.046 76.542 24.644 78.423 51.13 80.028 73.71 64.507 91.317 46.639 99 46.845 76.175 24.089 73.067 21.801 54.397 20.905 47.094 25.062 33.766 30.545 28.822"
                            fill="#748789"
                            data-fill-palette-color="accent"
                          />
                        </g>
                      </svg>
                    </g>
                  </svg>
                </g>
              </svg>
            </g>
          </svg>
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

MiniLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default MiniLogo;
