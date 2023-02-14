import { useLoaderData, useParams, Link } from "react-router-dom";
import { Product } from "../../types/Product";
import { Breadcrumbs, Image, Title, Text, Rating, createStyles, Card, Group, Stack, Flex, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    card: {
        height: '100%',

    },
    buttonPurchase: {
        width: '50%',
        height: '40px',
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

    const items = [
        <Link to='/'> Home </Link>,
        <Link relative='path' to={`/category/${data.category}`}>{data.category}</Link>,
        <Link to={`.`}>{data.title}</Link>
    ]

    return (
        <Card withBorder radius='md' className={classes.card}>
            <Breadcrumbs pb={16}>{items} </Breadcrumbs>
            <Flex p={16} gap={32}>
                <Image src={data.image} width={400}></Image>
                <Stack spacing={12} pt={32}>
                    <Title order={2}>{data.title}</Title>
                    <Group>
                    <Rating value={data.rating.rate} readOnly></Rating>
                    <Text>({data.rating.count})</Text>
                    </Group>
                    <Title order={1}>${data.price}</Title>

                    <Group noWrap>
                        <Button className={classes.buttonPurchase}>Buy now</Button>
                        <Button className={classes.buttonPurchase} variant='outline'>Add to cart</Button>
                    </Group>
                    <Text pt={48}>{data.description}</Text>
                </Stack>
            </Flex>

        </Card>)
}