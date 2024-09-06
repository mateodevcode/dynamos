"use client"

import { datosPodcasts } from "@/data/datos.podcasts"
import { BsSlack } from "react-icons/bs"
const { useDisclosure, Button, Slide, Box } = require("@chakra-ui/react")


function PodcastBarraReproduccion() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
        <>
          <Button onClick={onToggle} bg={"gray"} hover={"black"}
          className="w-16 h-10 -ml-6 sliderRight "></Button>
          <Slide direction='bottom' in={isOpen} style={{ zIndex: 100 }}>
            <Box
              p='4px'
              color='white'
              mt='4'
              bg='black'
              rounded='md'
              shadow='md'
            >
              {datosPodcasts[5].name}
            </Box>
          </Slide>
        </>
      )
    }


export default PodcastBarraReproduccion 
    
    