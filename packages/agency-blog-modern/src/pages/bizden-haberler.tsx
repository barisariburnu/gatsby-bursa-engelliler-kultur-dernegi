import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../containers/blog';

type BlogPageProps = {};

const BlogPage: React.FunctionComponent<BlogPageProps> = () => {
    return (
        <Layout>
            <SEO
                title="Bizden Haberler"
                description="Bursa Engelliler Kültür Derneği, Türkiye Cumhuriyeti vatandaşı olan tüm engellilerin dayanışmasını sağlamak amacıyla kurulmuştur. Soru ve görüşleriniz için bize yazın."
            />
            <Blog />
        </Layout>
    );
};

export default BlogPage;