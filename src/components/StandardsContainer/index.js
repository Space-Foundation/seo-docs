import React from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css";

const IntroContent = {
    text: 'Search engine optimization (SEO) is a critical aspect of digital marketing that can help businesses improve their online visibility and drive more traffic to their website. SEO standards are the best practices and guidelines that search engines recommend to ensure that websites are easily discoverable by search engines and that the content on the website is of high quality and relevant to users. This article will provide an essential guide to SEO standards and cover the best practices and guidelines you should follow to improve your website\'s search engine ranking.'
};

const ContainerContent = {
    item: {
        title: 'Technical Standards',
        text: 'The technical aspects of SEO are crucial to ensure that your website is easily discoverable by search engines. This includes optimizing your website\'s architecture, improving website speed, ensuring mobile-friendliness, and enhancing website security. Following these technical standards can help search engines crawl and index your website more efficiently, leading to higher search engine rankings.'
    },
    item2: {
        title: 'On-Page Optimization',
        text: 'On-page optimization is optimizing the content and structure of your web pages to make them more attractive to search engines. This includes conducting keyword research to identify relevant search terms, optimizing title tags and meta descriptions, and optimizing multimedia content such as images and videos. By following these on-page optimization techniques, you can improve your website\'s search engine ranking and drive more traffic to your website.'
    },
    item3: {
        title: 'Off-Page Optimization',
        text: 'Off-page optimization is the process of improving your website\'s search engine ranking by building links to your website from other websites. This includes creating high-quality and relevant content, building backlinks, and conducting social media marketing. By following these off-page optimization techniques, you can improve your website\'s search engine ranking and drive more traffic to your website.'
    },
    item4: {
        title: 'Content Creation',
        text: 'Creating high-quality and relevant content is critical to improving your website\'s search engine ranking. This includes creating content relevant to your target audience, using keywords effectively, and structuring your content for readability and SEO. By following these content creation standards, you can create more engaging content for users and be more visible to search engines.'
    },
    
};


const Conclusion = {
    text: 'Following SEO standards is critical to improving your website\'s search engine ranking and attracting more traffic. By implementing these best practices and guidelines, you can improve your website\'s architecture, optimize your content and multimedia, create high-quality and relevant content, and conduct off-page activities to drive more traffic to your website. Following these essential SEO standards can take your website\'s search engine ranking to the next level and achieve online success.'
};


function Container({ children, className, ...props }) {
    return (
        <div className={clsx('container', styles.container, className)} {...props}>
            {children}
        </div>
    );
}

function Intro({ children, className, ...props }) {
    return (
        <div className={clsx('intro', styles.intro, className)} {...props}>
            {children}
        </div>
    );
}

function Item({ children, className, ...props }) {
    return (
        <div className={clsx('item', styles.item, className)} {...props}>
            {children}
        </div>
    );
}

function ItemTitle({ children, className, ...props }) {
    return (
        <div className={clsx('itemTitle', styles.itemTitle, className)} {...props}>
            {children}
        </div>
    );
}

function ItemText({ children, className, ...props }) {
    return (
        <div className={clsx('itemText', styles.itemText, className)} {...props}>
            {children}
        </div>
    );
}

function ConclusionText({ children, className, ...props }) {
    return (
        <div className={clsx('conclusionText', styles.conclusionText, className)} {...props}>
            {children}
        </div>
    );
}

function SEOStandards() {
    return (
        <Container>
            <Intro>
                <p>{IntroContent.text}</p>
            </Intro>
            <Item>
                <ItemTitle>{ContainerContent.item.title}</ItemTitle>
                <ItemText>{ContainerContent.item.text}</ItemText>
            </Item>
            <Item>
                <ItemTitle>{ContainerContent.item2.title}</ItemTitle>
                <ItemText>{ContainerContent.item2.text}</ItemText>
            </Item>
            <Item>
                <ItemTitle>{ContainerContent.item3.title}</ItemTitle>
                <ItemText>{ContainerContent.item3.text}</ItemText>
            </Item>
            <Item>
                <ItemTitle>{ContainerContent.item4.title}</ItemTitle>
                <ItemText>{ContainerContent.item4.text}</ItemText>
            </Item>
            <ConclusionText>{Conclusion.text}</ConclusionText>
        </Container>
    );
}

export default SEOStandards;


