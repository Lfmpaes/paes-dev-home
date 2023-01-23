import {
    Avatar,
    Badge,
    Button,
    Card,
    Container,
    Group,
    Image,
    Text,
} from '@mantine/core';
import { AppProps } from 'next/app';
import type { TwitterInfo, TwitterInfoObject } from '../types';

const TwitterCard3 = () => {
    return <div>Test</div>;
};

const TwitterCard = (props: TwitterInfoObject) => {
    const twitterInfos: TwitterInfo = props.twitter;
    return (
        <Container size="xs">
            <Group mt={50} position="center">
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src={twitterInfos.header}
                            height={160}
                            alt="Header"
                        />
                    </Card.Section>
                    <Group position="apart" mt="md" mb="xs">
                        <Group>
                            <Avatar src={twitterInfos.profPic} radius="xl" />
                            <Text>{twitterInfos.displayName}</Text>
                        </Group>
                        <Badge color="blue" variant="light">
                            TARDIS
                        </Badge>
                    </Group>
                    <Text size="sm" color="dimmed">
                        {twitterInfos.bio}
                    </Text>
                    <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md">
                        Button
                    </Button>
                </Card>
            </Group>
        </Container>
    );
};

export default TwitterCard;
