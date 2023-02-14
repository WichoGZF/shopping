import { Breadcrumbs, Group, Title, Stack} from "@mantine/core";
import { Link, useActionData, useLoaderData, useParams } from "react-router-dom";

import { Product } from "../../types/Product";

import ProductCard from "../landing/ProductCard";


export default function Category(props: any) {
    const { categoryName } = useParams();

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
        <Link to='..'>Home</Link>,
        <Link to='.'>{titleName}</Link>,
    ]

    return (
        <Stack>
            <Breadcrumbs>{itemsBreadcrumbsList}</Breadcrumbs>
            <Title>{titleName}  products</Title>
            <Group>
                {productList}
            </Group>
        </Stack>
    )
}