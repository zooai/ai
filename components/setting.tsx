import {
  FaArrowLeft,
  FaShareAlt,
  FaFileExport,
  FaTrashAlt,
  FaSignOutAlt
} from 'react-icons/fa'
import Sideslider from '@/components/slider'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
function Setting(props: any) {
  const { user, flag, event } = props
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  function getUserInitials(name: string) {
    console.log(name)
    const [firstName, lastName] = name.split(' ')
    return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2)
  }
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5
        }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600]
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#aaa' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500
      })
    }
  }))
  const CustomSlider = styled(Slider)({
    color: '#fff',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none'
    },
    '& .MuiSlider-thumb': {
      height: 15,
      width: 15,
      backgroundColor: '#000',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit'
      },
      '&:before': {
        display: 'none'
      }
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#333',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
      },
      '& > *': {
        transform: 'rotate(45deg)'
      }
    }
  })
  const voice_list = [
    {
      id: 1,
      title: 'Cindy'
    },
    {
      id: 2,
      title: 'James'
    },
    {
      id: 3,
      title: 'Becca'
    },
    {
      id: 4,
      title: 'Jose'
    },
    {
      id: 5,
      title: 'Kelly'
    }
  ]
  return (
    <div
      className={`absolute transition-all duration-300 ${
        flag == 3 ? 'translate-x-0' : '-translate-x-full'
      }  bg-black z-1  w-full min-h-screen overflow-auto`}
    >
      <div className="flex flex-col h-screen">
        <h1 className="absolute w-full z-10 text-3xl pt-12 h-[180px] text-center pb-12 border-b-2 border-white">
          Blue the Beluga
        </h1>
        <div
          className="absolute top-0 left-0 z-10 cursor-pointer pl-4 pt-4"
          onClick={() => event(0)}
        >
          <FaArrowLeft />
        </div>
        <Sideslider />
        <div className="flex flex-col overflow-auto">
          <h2 className="border-b-2 py-3 px-5 border-white text-xl">
            Settings
          </h2>
          <p className="pt-6 pl-5 text-xs">Sense of humor</p>
          <div className="px-5">
            <CustomSlider
              valueLabelDisplay="auto"
              aria-label="sense slider"
              defaultValue={35}
            />
          </div>
          <p className="pt-2 pl-5 text-xs">Factual</p>
          <div className="px-5">
            <CustomSlider
              valueLabelDisplay="auto"
              aria-label="factual slider"
              defaultValue={45}
            />
          </div>
          <p className="pt-2 pl-5 text-xs">Age of Personality</p>
          <div className="px-5">
            <CustomSlider
              valueLabelDisplay="off"
              aria-label="age slider"
              defaultValue={55}
            />
          </div>
          <div className="px-6 flex justify-between -mt-3">
            <p className="text-[0.5rem]">Baby</p>
            <p className="text-[0.5rem]">Adult</p>
          </div>
          <p className="pt-4 pl-5 text-xs">Choose Animal Voice</p>
          <div className="pt-3 px-5 flex items-center justify-between">
            {voice_list.map((data, index) => (
              <div
                key={index}
                className="text-[0.6rem] align-middle flex items-center justify-center border border-white text-center p-2"
              >
                {data.title}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 border-y border-white">
            <div className="flex justify-between items-center">
              <p className="text-sm">Chat history and training</p>
              <IOSSwitch />
            </div>
            <p className="text-[0.7rem] pt-2">
              Save new chats on this browser to your history and allow them to
              be used to imporve our models. Unsaved chats will be deleted from
              our systems within 30 days. This setting does not sync across
              browsers or devices. <u>Learn more</u>
            </p>
          </div>
          <div className="p-4 border-b border-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaShareAlt />
                <p className="text-sm">Shared links</p>
              </div>
              <div className="text-xs min-w-[80px] flex items-center justify-center border border-white text-center py-2 px-4">
                Manage
              </div>
            </div>
          </div>
          <div className="p-4 border-b border-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaFileExport />
                <p className="text-sm">Export Data</p>
              </div>
              <div className="text-xs min-w-[80px] flex items-center justify-center border border-white text-center py-2 px-4">
                Export
              </div>
            </div>
          </div>
          <div className="p-4 border-b border-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaTrashAlt />
                <p className="text-sm">Delete Account</p>
              </div>
              <div className="text-xs min-w-[80px] flex items-center justify-center border border-red-600 text-red-600 text-center py-2 px-4">
                Delete
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={signOut}
            >
              <div className="flex items-center space-x-2">
                <FaSignOutAlt />
                <p className="text-sm">Log out</p>
              </div>
              {user?.user_metadata.avatar_url ? (
                <Image
                  height={60}
                  width={60}
                  className="h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
                  src={
                    user?.user_metadata.avatar_url
                      ? `${user.user_metadata.avatar_url}`
                      : ''
                  }
                  alt={user.user_metadata.name ?? 'Avatar'}
                />
              ) : (
                <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
                  {getUserInitials(user?.user_metadata.name ?? user?.email)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Setting
