import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
	FeaturedCardWrapper,
	PostPreview,
	PostDetails,
	PostTitle,
	PostCategory,
	PostMeta,
	PostDate,
} from './featured-card.style';

interface FeaturedCardProps {
	image?: any;
	title: string;
	postColor: string;
	description?: string;
	url: string;
	date?: string;
	tags?: [];
	categories?: [];
	className?: string;
	imageType?: 'fixed' | 'fluid';
	overlay?: boolean;
}

const FeaturedCard: React.FunctionComponent<FeaturedCardProps> = ({
	image,
	title,
	postColor,
	description,
	url,
	date,
	tags,
	categories,
	className,
	imageType,
	overlay,
	...props
}) => {
	const addClass = ['featured_card'];

	if (overlay == true) {
		addClass.push('overlay');
	}

	if (className) {
		addClass.push(className);
	}

	return (
		<FeaturedCardWrapper className={addClass.join(' ')} {...props}>
			{image == null ? null : (
				<PostPreview className='post_preview'>
					<Link to={url}>
						{imageType === 'fluid' ? (
							<Img fluid={image} alt='post preview' />
						) : (
							<Img fixed={image} alt='post preview' />
						)}
					</Link>
				</PostPreview>
			)}

			<PostDetails className='post_details'>
				{categories == null ? null : (
					<PostCategory categoryColor={postColor}>
						{categories &&
							categories.map((cat, index) => (
								<Link key={index} to={`/category/${_.kebabCase(cat)}/`}>
									{cat}
								</Link>
							))}
					</PostCategory>
				)}

				<PostTitle className='post_title'>
					<Link to={url}>{title}</Link>
				</PostTitle>
				<PostMeta>
					{date && (
						<PostDate
							dangerouslySetInnerHTML={{
								__html: date,
							}}
							className='post_date'
						/>
					)}
				</PostMeta>
			</PostDetails>
		</FeaturedCardWrapper>
	);
};

FeaturedCard.defaultProps = {
	imageType: 'fluid',
};

export default FeaturedCard;
