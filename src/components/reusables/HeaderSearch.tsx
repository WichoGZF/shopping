import { createStyles, Header, Autocomplete, Group, Burger, Button, ActionIcon, Container, TextInput, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderSearchProps } from 'types/HeaderSearchProps';
import companyLogo from '../../assets/compumundoLogo.png'
import { IconArrowLeft, IconArrowRight, IconSearch, IconShoppingCart, IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const links: HeaderSearchProps = {
    links: [
        {
            link: "/about",
            label: "Features"
        },
        {
            link: "/pricing",
            label: "Pricing"
        },
        {
            link: "/learn",
            label: "Learn"
        },
        {
            link: "/community",
            label: "Community"
        }
    ]
}


const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1500px',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
}));

export default function HeaderSearch() {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();
    const theme = useMantineTheme();

    const items = links.links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={56} className={classes.header} mb={120}>
            <Container>
                <div className={classes.inner}>
                    <Group>
                        <Link to={'/'}>
                            <img src={companyLogo}></img>
                        </Link>
                    </Group>
                    <Group>
                        <TextInput
                            icon={<IconSearch size={18} stroke={1.5} />}
                            size="md"
                            radius={'md'}
                            rightSection={
                                <ActionIcon size={32} radius={'md'} color={theme.primaryColor} variant="filled">
                                    {theme.dir === 'ltr' ? (
                                        <IconArrowRight size={18} stroke={1.5} />
                                    ) : (
                                        <IconArrowLeft size={18} stroke={1.5} />
                                    )}
                                </ActionIcon>
                            }
                            placeholder="Search products"
                            rightSectionWidth={42}
                        />
                    </Group>
                    <Group>
                        <Group ml={50} spacing={5} className={classes.links}>
                            <Button rightIcon={<IconUser size={16} stroke={1.5}></IconUser>}>Sign in or register</Button>
                            <ActionIcon>
                                <IconShoppingCart size={16} stroke={1.5}></IconShoppingCart>
                            </ActionIcon>
                        </Group>

                    </Group>
                </div>
            </Container>
        </Header>
    );
}