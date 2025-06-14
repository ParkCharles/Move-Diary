import { Box, Container, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { LinearGradient } from 'react-text-gradients'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import EditIcon from '@mui/icons-material/Edit'
import DevicesIcon from '@mui/icons-material/Devices'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import FlagIcon from '@mui/icons-material/Flag'
import { Link as RouterLink } from 'react-router-dom'

const Checkpoint = ({ children, index }: { children: React.ReactNode, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Box sx={{ position: 'relative' }}>
      {children}
    </Box>
  </motion.div>
)

export function HowTo() {
  const steps = [
    {
      title: "1. Install Sui Wallet",
      content: (
        <>
          <Box>
            <Typography variant="body1" color="text.secondary" component="div" paragraph>
              Get the official Sui Wallet extension from Chrome Web Store. This is required to interact with our platform.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            href="https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ mb: 2 }}
          >
            Install Sui Wallet
          </Button>
        </>
      ),
      icon: <AccountBalanceWalletIcon />
    },
    {
      title: "2. Create or Import Wallet",
      content: "Set up a new wallet with a secure password or import your existing wallet",
      icon: <FlagIcon />
    },
    {
      title: "3. Connect to Testnet",
      content: "Click the ⚙️ (settings) icon in your Sui Wallet and select 'Sui Testnet' as your network",
      icon: <DevicesIcon />
    },
    {
      title: "4. Request Testnet SUI Tokens",
      content: "In the same settings menu, scroll down to find 'Request Testnet SUI Tokens'. These tokens are required for storing your hiking records",
      icon: <AddCircleOutlineIcon />
    },
    {
      title: "5. Prepare Your Data",
      content: (
        <>
          <Box>
            <Typography variant="body1" color="text.secondary" component="div" paragraph>
              Export GPX from your device:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Apple Watch" 
                  secondary="Use WorkOutDoors app for GPX export"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Samsung Health" 
                  secondary="Activity > Share > Export as GPX"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Garmin Connect" 
                  secondary="Activity > Export GPX"
                />
              </ListItem>
            </List>
          </Box>
        </>
      ),
      icon: <FileUploadIcon />
    },
    {
      title: "6. Fill the Form",
      content: "Upload your GPX file or manually enter your hiking information",
      icon: <EditIcon />
    },
    {
      title: "7. Add Photos",
      content: "Upload photos from your hiking journey to make your record more memorable",
      icon: <PhotoCameraIcon />
    },
    {
      title: "8. Review & Submit",
      content: "Check all the information and click 'Record Hiking Journey' to store it on the blockchain",
      icon: <CheckCircleIcon />
    },
    {
      title: "9. Confirmation",
      content: "Wait for the transaction to be confirmed. Your hiking record will be preserved!",
      icon: <FlagIcon />
    }
  ]

  return (
    <Box sx={{ 
      py: 8, 
      bgcolor: '#f5f5f5', 
      minHeight: '100vh'
    }}>
      <Container>
        <Box sx={{ mt: { xs: 8, md: 10 }, mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              mb: 4
            }}>
              <Box
                component="img"
                src="/shallwe.png"
                alt="Shallwe character"
                sx={{
                  width: { xs: '100px', md: '140px' },
                  height: 'auto',
                  animation: 'float 3s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                  }
                }}
              />
              
              <Box>
                <Typography variant="h3" gutterBottom>
                  <LinearGradient gradient={['to right', '#1a237e, #0d47a1']}>
                    How to Get Started
                  </LinearGradient>
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ color: '#6e6e73' }}
                >
                  Follow these simple steps to start your journey
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          {steps.map((step, index) => (
            <Checkpoint key={index} index={index}>
              <Card sx={{ boxShadow: '0 8px 32px rgba(26, 35, 126, 0.1)', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" component="div">
                    {step.content}
                  </Typography>
                </CardContent>
              </Card>
            </Checkpoint>
          ))}
        </Box>

        <Box 
          sx={{ 
            mt: 12,
            textAlign: 'center',
            bgcolor: '#fff',
            borderRadius: 4,
            p: 6,
            boxShadow: '0 8px 32px rgba(26, 35, 126, 0.1)'
          }}
        >
          <Typography variant="h3" gutterBottom>
            <LinearGradient gradient={['to right', '#1a237e, #0d47a1']}>
              Ready to Record Your Journey?
            </LinearGradient>
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              color: '#6e6e73',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Now that you're all set up, let's preserve your hiking memories on the blockchain
          </Typography>
          <Button
            component={RouterLink}
            to="/hiking"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#0071e3',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: '#0077ED'
              }
            }}
          >
            Start Recording Your Journey
          </Button>
        </Box>
      </Container>
    </Box>
  )
} 