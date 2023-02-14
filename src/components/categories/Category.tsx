import { Breadcrumbs, Group, Title, Stack} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link, useActionData, useLoaderData, useParams } from "react-router-dom";

import { Product } from "../../types/Product";

import ProductCard from "../landing/ProductCard";


export default function Category(props: any) {
    const { categoryName } = useParams();

    const matches = useMediaQuery('(max-width:960px)');

    const data = useLoaderData() as Data
    

    const titleName = categoryName?.charAt(0).toUpperCase() + categoryName!.slice(1);

    const productList = data.map((product: Product, index) => {

        return (
            <ProductCard
                imageSrc={product.image}
                productName={product.title}
                price={product.price}
                id={product.id}
                key={product.id}
            >
            </ProductCard>
        )
    })

    const itemsBreadcrumbsList = [
        <Link key='home' to='..'>Home</Link>,
        <Link key={titleName} to='.'>{titleName}</Link>,
    ]

    return (
        <Stack >
            <Breadcrumbs>{itemsBreadcrumbsList}</Breadcrumbs>
            <Title align={matches? 'center': 'start'}>{titleName}  products</Title>
            <Group position={matches? 'center': 'left'}>
                {productList}
            </Group>
        </Stack>
    )
}