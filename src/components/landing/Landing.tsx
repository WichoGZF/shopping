import {
    Stack, Container, createStyles, Group, Title, Text, Button,
    Image, Divider, Center
} from '@mantine/core';
import bannerOne from '../../assets/banner1.png';
import bannerTwo from '../../assets/banner2.png';
import bannerThree from '../../assets/banner3.png';
import jewelryImage from '../../assets/jewelry.jpg'
import techImage from '../../assets/electronics.jpg'
import mensClothImage from '../../assets/mens-clothing.jpg'
import womensClothImage from '../../assets/womens-clothing.jpg'

import { IconArrowNarrowRight, IconCreditCard, IconShieldCheck, IconTruckDelivery } from "@tabler/icons-react";
import { useContext } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";

import { useRouteLoaderData, Link, useLoaderData } from "react-router-dom";

import { Category } from '../../types/Category';
import { Product } from '../../types/Product';

const useStyles = createStyles((theme) => ({
    mainFlex: {
        width: '100%',
        maxWidth: '1500px'
    },

    newlineText: {
        whiteSpace: 'pre-wrap',

    },
    categoryImageContainer: {
        borderRadius: '50%',
        backgroundColor: 'white',
        height: '200px',
        width: '200px',
        border: '1px solid black',
        overflow: 'hidden',
    },
    imageRadius: {
        borderRadius: '50%'
    }
}));

interface Data {
    initialProducts: Product[],
    categories: Category[],
}

export default function Landing() {
    const { classes } = useStyles();

    const data = useLoaderData() as Data

    const initialItemsList = data.initialProducts.map((item) => {
        return (
            <ProductCard
                key={item.id}
                id={item.id}
                productName={item.title}
                price={item.price}
                imageSrc={item.image}

            ></ProductCard>
        )
    })

    return (
        <>
            <Banner
                title='Welcome 2023 with everything you need.'
                text='Find everything to reach your goals and reinvent yourself in the process.'
                link=''
                imageLink={bannerOne}
            ></Banner>

            <Divider></Divider>
            <Stack>
                <Group>
                    <Title order={1}>
                        Products
                    </Title>
                    <Link to={'category/all'}>
                        <Button rightIcon={<IconArrowNarrowRight></IconArrowNarrowRight>}>
                            See full list
                        </Button>
                    </Link>
                </Group>
                <Group spacing={32}>
                    {initialItemsList}
                </Group>
            </Stack>
            <Divider></Divider>
            <Stack>
                <Group>
                    <Title order={1}>
                        Categories
                    </Title>
                </Group>
                <Group position='center'>
                    <Link to={`category/${data.categories[0]}`}>
                        <Stack align='center'>
                            <Center className={classes.categoryImageContainer}>
                                <Image src={techImage} fit='cover'></Image>
                            </Center>
                            <Text fz='md'>Electronics</Text>
                        </Stack>

                    </Link>
                    <Link to={`category/${data.categories[1]}`}>
                        <Stack align='center'>
                            <Center className={classes.categoryImageContainer}>
                                <Image src={jewelryImage} fit='cover'></Image>
                            </Center>
                            <Text fz='md'>Jewelry</Text>
                        </Stack>

                    </Link>
                    <Link to={`category/${data.categories[2]}`}>
                        <Stack align='center'>
                            <Center className={classes.categoryImageContainer}>
                                <Image src={mensClothImage} fit='fill' height={200}></Image>
                            </Center>
                            <Text fz='md'>Men's clothing</Text>
                        </Stack>

                    </Link>
                    <Link to={`category/${data.categories[3]}`}>
                        <Stack align='center'>
                            <Center className={classes.categoryImageContainer}>
                                <Image src={womensClothImage} fit='cover'></Image>
                            </Center>
                            <Text fz='md'>Women's clothing</Text>
                        </Stack>
                    </Link>
                </Group>
            </Stack>
            <Divider></Divider>
            <Group noWrap={true} spacing={'md'} grow={true} align='flex-start'>

                <Stack align='center'>
                    <IconCreditCard size={32}></IconCreditCard>
                    <Text fz='md'>Payment is your choice</Text>
                    <Text fz='sm' align='center' className={classes.newlineText}> With Compumundo pay
                        with credit or debit. You can also pay in
                        up to 12 months with out credit card.
                    </Text>
                    <a href=''>
                        <Text fz='sm' align='center'>
                            How to add a payment method.
                        </Text>
                    </a>
                </Stack>
                <Stack align='center'>
                    <IconTruckDelivery size={32}></IconTruckDelivery>
                    <Text fz='md'>Free shipping in orders above $50</Text>
                    <Text fz='sm' align='center' className={classes.newlineText}>
                        You have free shipping on millions of selected products.*
                    </Text>
                    <a href=''>
                        <Text fz='sm' align='center'>
                            Learn more about this benefit.
                        </Text>
                    </a>
                </Stack>
                <Stack align='center'>
                    <IconShieldCheck size={32}></IconShieldCheck>
                    <Text fz='md'>Safety from start to finish</Text>
                    <Text fz='sm' align='center' className={classes.newlineText}>We have a 30 day free return policy. If you don't like it, send it back and we'll
                        get you your money back. You're safe with us!
                        {"\n\n"}
                    </Text>
                    <a href=''>
                        <Text fz='sm' align='center'>
                            How we protect you.
                        </Text>
                    </a>
                </Stack>
            </Group>
        </>
    )
}