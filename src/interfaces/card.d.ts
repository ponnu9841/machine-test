type VerticalCardProps = {
    imageUrl: string;
    title: string;
    content: string;
    time?: string;
}

type HorizontalCardProps = Omit<VerticalCardProps, 'title'> & {
    title?: string;
    author: string;
    showHeading?: boolean;
    showButton?: boolean;
    showDivider?: boolean;
    blogCard?: boolean;
}