import { useLoaderData, useParams, Link } from "react-router-dom";
import { Product } from "../../types/Product";
import { Breadcrumbs, Image, Title, Text, Rating, createStyles, Card, Group, Stack, Flex, Button, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    card: {
        height: '100%',


    },
    buttonPurchase: {
        width: '50%',
        height: '40px',

        '@media (max-width: 960px)': {
            width: '100%',
        },
    },

    image: {
        width: '400px',
        '@media (max-width: 960px)': {
            maxWidth: '100%',
            objectFit: 'contain',
        },
    }

}));

interface BannerProps {
    title: string,
    text: string,
    link: string,
    imageLink: string,
}


export default function ProductPage(props: any) {
    const { classes } = useStyles();

    const { productId } = useParams();
    const data = useLoaderData() as Product

    const matches = useMediaQuery('(max-width:960px)');

    const items = [
        <Link to='/'> Home </Link>,
        <Link relative='path' to={`/category/${data.category}`}>{data.category}</Link>,
        <Link to={`.`}>{data.title}</Link>
    ]

    return (
        <Card withBorder radius='md' className={classes.card}>
            <Breadcrumbs pb={16}>{items} </Breadcrumbs>
            <Flex p={16} pt={32} gap={32} direction={matches? 'column': 'row'}>
                <img src={data.image} className={classes.image}></img>
                <Stack spacing={12} pt={matches? 0 : 32} >
                    <Title order={2}>{data.title}</Title>
                    <Group>
                        <Rating value={data.rating.rate} readOnly></Rating>
                        <Text>({data.rating.count})</Text>
                    </Group>
                    <Title order={1}>${data.price}</Title>

                    <Group noWrap={!matches} pt={matches? 32 : 0}>
                        <Button className={classes.buttonPurchase}>Buy now</Button>
                        <Button className={classes.buttonPurchase} variant='outline'>Add to cart</Button>
                    </Group>
                    <Text pt={48}>{data.description}</Text>
                </Stack>
            </Flex>

        </Card>)
}