import { Flex, Stack, Title,Text, Button, Image, createStyles } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    bannerContainer: {
        flexDirection: 'row',

    },

    bannerContent: {
        flex: '1 1 30%',
        height: 'auto',
        backgroundColor: '#00718F',
        boxSizing: 'border-box',
        padding: '1rem',

        borderTopLeftRadius: '.25rem',
        borderBottomLeftRadius: '.25rem',
    },

    bannerImage: {
        flex: '1 1 70%',
        height: 'auto',
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
    },
}));

interface BannerProps{ 
    title: string, 
    text: string, 
    link: string, 
    imageLink: string,
}


export default function Banner({title, text, link, imageLink}: BannerProps){
    const { classes } = useStyles();

    return (
        <Flex className={classes.bannerContainer}>
            <div className={classes.bannerContent}>
                <Stack spacing='md'>
                    <Title order={3} color='#b0eeff'>
                        {title}
                    </Title>
                    <Text fz={"md"} color='#b0eeff'>
                        {text}
                    </Text>
                
                </Stack>
            </div>
            <Image src={imageLink} className={classes.bannerImage} alt='banner'>

            </Image>
        </Flex>
    )
}