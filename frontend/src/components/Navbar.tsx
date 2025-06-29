import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from 'react'
import { ConnectButton } from '@mysten/dapp-kit'
import { useDeviceDetect } from '@/hooks'
import { styled } from '@mui/material/styles'

const commonButtonStyles = {
  fontSize: '14px',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  fontWeight: 600,
  lineHeight: '20px',
  padding: '12px 24px',
  height: '44px',
  borderRadius: '20px',
  textTransform: 'none',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  minWidth: '140px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
    filter: 'brightness(1.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
}

const logoStyles = {
  textDecoration: 'none',
  color: '#fff',
  fontFamily: '"Bauhaus 93", sans-serif',
  fontSize: '1.1rem',
  fontWeight: 600,
  padding: '0.3rem 0.8rem',
  height: '40px',
  width: 'auto',
  minWidth: 'fit-content',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
    filter: 'brightness(1.1)'
  },
  '& .logo-image': {
    height: '18px',
    width: 'auto',
    objectFit: 'contain'
  },
  '& .character-image': {
    height: '34px',
    width: 'auto',
    objectFit: 'contain',
    marginLeft: '2px'
  }
}

const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: '16px',
  position: 'relative',
  '& ~ div > button': {
    display: 'none !important'
  },
  '& button[data-connected="true"]': {
    ...commonButtonStyles,
    backgroundColor: '#000'
  },
  '& button:not([data-connected="true"])': {
    ...commonButtonStyles,
    backgroundColor: '#0071e3',
    '&:hover': {
      backgroundColor: '#0077ED'
    }
  }
})

const StyledConnectButton = styled(ConnectButton)`
  && {
    font-size: 14px !important;
    font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-weight: 600 !important;
    line-height: 20px !important;
    padding: 12px 24px !important;
    height: 44px !important;
    border-radius: 20px !important;
    text-transform: none !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease;
    cursor: pointer;
    color: white;
    background-color: #0071e3;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 140px !important;

    &:hover {
      background-color: #0077ED;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
      filter: brightness(1.1);
    }

    &[data-connected="true"], 
    &[data-connected="true"] span,
    &[data-connected="true"] div {
      font-size: 14px !important;
      font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif !important;
      font-weight: 600 !important;
      line-height: 20px !important;
    }
  }
`

const pages = [
  { name: 'About', path: '/about' },
  { name: 'How To', path: '/how-to' },
  { name: 'Store Hiking', path: '/hiking' }
]

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const isMobile = useDeviceDetect()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (menuOpen) {
        handleCloseNavMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const appBar = document.querySelector('.MuiAppBar-root') as HTMLElement
      if (appBar) {
        if (scrollPosition > 0) {
          appBar.style.backgroundColor = 'rgba(0,0,0,0.95)'
        } else {
          appBar.style.backgroundColor = 'rgba(0,0,0,0.8)'
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
    setMenuOpen(true)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    setMenuOpen(false)
  }

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: 'none',
        zIndex: 1100,
        border: 'none',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        position: 'fixed',
        width: '100%',
        maxWidth: '100%'
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          padding: '0 2rem',
          '@media (max-width: 768px)': {
            padding: '0 16px'
          }
        }}>
          <Box
            component={RouterLink}
            to="/"
            sx={logoStyles}
          >
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Logo"
              sx={{
                height: { xs: '24px', md: '32px' },
                width: 'auto',
                cursor: 'pointer'
              }}
            />
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}shallwe.png`}
              alt="Shallwe character"
              sx={{
                height: { xs: '32px', md: '40px' },
                width: 'auto'
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 2,
            alignItems: 'center',
            height: '44px'
          }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={commonButtonStyles}
              >
                {page.name}
              </Button>
            ))}
            <ButtonContainer>
              <StyledConnectButton 
                connectText="Connect Wallet"
                disabled={isMobile}
                title={isMobile ? "Wallet connection is only supported on desktop browsers" : ""}
                onMouseLeave={(e) => {
                  setTimeout(() => {
                    const relatedTarget = e.relatedTarget as HTMLElement;
                    if (!relatedTarget?.closest('.wallet-dropdown')) {
                      handleCloseNavMenu();
                    }
                  }, 100);
                }}
                sx={{
                  opacity: isMobile ? 0.6 : 1,
                  cursor: isMobile ? 'not-allowed' : 'pointer',
                  '&:hover': {
                    backgroundColor: isMobile ? '#0071e3' : '#0077ED',
                    transform: isMobile ? 'none' : 'translateY(-2px)',
                  }
                }}
              />
              {isMobile && (
                <Typography 
                  variant="caption" 
                  sx={{ 
                    marginTop: '4px',
                    color: '#ff4444',
                    fontSize: '0.7rem'
                  }}
                >
                  Desktop Chrome only
                </Typography>
              )}
            </ButtonContainer>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, height: '44px', alignItems: 'center' }}>
            <IconButton
              onClick={handleOpenNavMenu}
              sx={{ color: '#fff' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              onClick={handleCloseNavMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                sx: {
                  width: '200px',
                  mt: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  '& .MuiMenuItem-root': {
                    padding: '12px',
                    minHeight: '48px',
                    '& .MuiTypography-root': {
                      display: 'block',
                      width: '100%',
                      color: '#1d1d1f',
                      fontWeight: 500,
                      fontSize: '1rem'
                    }
                  }
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    width: '100%',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <Typography textAlign="center">
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem 
                onClick={handleCloseNavMenu}
                sx={{
                  padding: 1,
                  '& > button': {
                    width: '100%'
                  }
                }}
              >
                <ButtonContainer>
                  <StyledConnectButton 
                    connectText="Connect Wallet"
                    disabled={isMobile}
                    title={isMobile ? "Wallet connection is only supported on desktop browsers" : ""}
                    onMouseLeave={(e) => {
                      setTimeout(() => {
                        const relatedTarget = e.relatedTarget as HTMLElement;
                        if (!relatedTarget?.closest('.wallet-dropdown')) {
                          handleCloseNavMenu();
                        }
                      }, 100);
                    }}
                    sx={{
                      opacity: isMobile ? 0.6 : 1,
                      cursor: isMobile ? 'not-allowed' : 'pointer',
                      '&:hover': {
                        backgroundColor: isMobile ? '#0071e3' : '#0077ED',
                        transform: isMobile ? 'none' : 'translateY(-2px)',
                      }
                    }}
                  />
                </ButtonContainer>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
} 