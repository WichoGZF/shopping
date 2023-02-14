import { Card, Title, Text, Image, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

interface ProductCardProps {
    imageSrc: string,
    productName: string,
    price: number,
    id: number,
}

const useStyles = createStyles((theme) => ({
    cardSize: {
        maxWidth: '200px',
    }
}));

export default function ProductCard({ imageSrc, productName, price, id }: ProductCardProps) {
    const { classes } = useStyles();

    return (
        <Link to={`product/${id}`}>
            <Card shadow='sm' p='lg' radius='md' withBorder className={classes.cardSize}>
                <Card.Section>
                    <Image height={200} width={200} src={imageSrc}></Image>

                </Card.Section>
                <Text fw={700} truncate>{productName} </Text>
                <Title order={2}>${price}</Title>
            </Card>
        </Link>
    )
}

