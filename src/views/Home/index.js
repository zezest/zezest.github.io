import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { 
  Wrap, Hero, 
  Title, List, Item, ItemHeader } from './styled'

const HomeComponent = () => {
  const { allMarkdownRemark: { edges} } = useStaticQuery(
    graphql`
      query IndexQuery {
        allMarkdownRemark(
          sort: { fields: [fields___date], order: DESC }
          limit: 5
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 100)
              fields {
                slug
                date(formatString: "YYYY.MM.DD")
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  const postsData = edges.map(edge => edge.node)

  return (
    <Wrap>
      <Hero>
        <h1>ZEZE's BLOG</h1>
        <p>키득키득</p>
        <svg viewBox="0 0 102 32">
          <path d="M46.975 1H27.5C26.6716 1 26 1.67157 26 2.5V29.5C26 30.3284 26.6716 31 27.5 31H47.5C48.3284 31 49 30.3284 49 29.5V25.8081C49 24.9797 48.3284 24.3081 47.5 24.3081H33.6962V18.8162H44.875C45.7034 18.8162 46.375 18.1446 46.375 17.3162V13.9545C46.375 13.1261 45.7034 12.4545 44.875 12.4545H33.6962V7.45455H46.975C47.8034 7.45455 48.475 6.78297 48.475 5.95455V2.5C48.475 1.67157 47.8034 1 46.975 1Z" strokeWidth="2"/>
          <path d="M13.1736 7.65405L1.29194 25.8874C1.28919 25.8916 1.28599 25.8964 1.28241 25.9019C1.24717 25.9554 1.17456 26.0656 1.12092 26.1909C1.07543 26.2973 1.04239 26.4085 1.02246 26.5224C0.998949 26.6567 0.999615 26.7887 0.999938 26.8527C0.999971 26.8592 1 26.865 1 26.8701V29.2L0.999994 29.2231C0.999949 29.3423 0.999894 29.4845 1.01013 29.6098C1.022 29.755 1.05244 29.963 1.16349 30.181C1.3073 30.4632 1.53677 30.6927 1.81901 30.8365C2.03696 30.9476 2.24495 30.978 2.39017 30.9899C2.51548 31.0001 2.65774 31.0001 2.77685 31L2.8 31H21.2L21.2232 31C21.3423 31.0001 21.4845 31.0001 21.6098 30.9899C21.755 30.978 21.963 30.9476 22.181 30.8365C22.4632 30.6927 22.6927 30.4632 22.8365 30.181C22.9476 29.963 22.978 29.755 22.9899 29.6098C23.0001 29.4845 23.0001 29.3423 23 29.2232L23 29.2V26.1081L23 26.085C23.0001 25.9658 23.0001 25.8236 22.9899 25.6983C22.978 25.5531 22.9476 25.3451 22.8365 25.1271C22.6927 24.8449 22.4632 24.6154 22.181 24.4716C21.963 24.3605 21.755 24.3301 21.6098 24.3182C21.4845 24.308 21.3423 24.3081 21.2232 24.3081L21.2 24.3081H10.7102L22.5584 6.07338C22.5612 6.06916 22.5643 6.06431 22.5679 6.05888C22.603 6.00546 22.6753 5.89543 22.7287 5.7703C22.774 5.66419 22.8069 5.55321 22.8267 5.43956C22.8501 5.30554 22.8494 5.17388 22.8491 5.10997C22.8491 5.10348 22.8491 5.09768 22.8491 5.09265V2.8C22.8491 2.79239 22.8491 2.78467 22.8491 2.77685C22.8491 2.65773 22.8492 2.51548 22.8389 2.39017C22.8271 2.24495 22.7966 2.03696 22.6856 1.81901C22.5418 1.53677 22.3123 1.3073 22.03 1.16349C21.8121 1.05244 21.6041 1.022 21.4589 1.01013C21.3336 0.999894 21.1913 0.999949 21.0722 0.999994L21.0491 1H4.04528C4.03768 1 4.02996 0.999997 4.02214 0.999994C3.90303 0.999949 3.76077 0.999894 3.63545 1.01013C3.49024 1.022 3.28224 1.05244 3.0643 1.16349C2.78205 1.3073 2.55258 1.53677 2.40877 1.81901C2.29772 2.03696 2.26728 2.24495 2.25542 2.39017C2.24518 2.51549 2.24523 2.65775 2.24528 2.77686C2.24528 2.78468 2.24528 2.79239 2.24528 2.8V5.85405C2.24528 5.86166 2.24528 5.86937 2.24528 5.87719C2.24523 5.99631 2.24518 6.13856 2.25542 6.26388C2.26728 6.4091 2.29772 6.61709 2.40877 6.83504C2.55258 7.11728 2.78205 7.34675 3.0643 7.49056C3.28224 7.60161 3.49024 7.63205 3.63545 7.64392C3.76077 7.65416 3.90303 7.6541 4.02214 7.65406C4.02996 7.65406 4.03768 7.65405 4.04528 7.65405H13.1736Z" strokeWidth="2"/>
          <path d="M99 1H80.5C79.6716 1 79 1.67157 79 2.5V29.5C79 30.3284 79.6716 31 80.5 31H99.5C100.328 31 101 30.3284 101 29.5V25.8081C101 24.9797 100.328 24.3081 99.5 24.3081H86.425V18.8162H97C97.8284 18.8162 98.5 18.1446 98.5 17.3162V13.9545C98.5 13.1261 97.8284 12.4545 97 12.4545H86.425V7.45455H99C99.8284 7.45455 100.5 6.78297 100.5 5.95455V2.5C100.5 1.67157 99.8284 1 99 1Z" strokeWidth="2"/>
          <path d="M64.1736 7.65405L52.2919 25.8874C52.2892 25.8916 52.286 25.8964 52.2824 25.9019C52.2472 25.9554 52.1746 26.0656 52.1209 26.1909C52.0754 26.2973 52.0424 26.4085 52.0225 26.5224C51.9989 26.6567 51.9996 26.7887 51.9999 26.8527C52 26.8592 52 26.865 52 26.8701V29.2L52 29.2231C51.9999 29.3423 51.9999 29.4845 52.0101 29.6098C52.022 29.755 52.0524 29.963 52.1635 30.181C52.3073 30.4632 52.5368 30.6927 52.819 30.8365C53.037 30.9476 53.245 30.978 53.3902 30.9899C53.5155 31.0001 53.6577 31.0001 53.7768 31L53.8 31H72.2L72.2232 31C72.3423 31.0001 72.4845 31.0001 72.6098 30.9899C72.755 30.978 72.963 30.9476 73.181 30.8365C73.4632 30.6927 73.6927 30.4632 73.8365 30.181C73.9476 29.963 73.978 29.755 73.9899 29.6098C74.0001 29.4845 74.0001 29.3423 74 29.2232L74 29.2V26.1081L74 26.085C74.0001 25.9658 74.0001 25.8236 73.9899 25.6983C73.978 25.5531 73.9476 25.3451 73.8365 25.1271C73.6927 24.8449 73.4632 24.6154 73.181 24.4716C72.963 24.3605 72.755 24.3301 72.6098 24.3182C72.4845 24.308 72.3423 24.3081 72.2232 24.3081L72.2 24.3081H61.7102L73.5584 6.07338C73.5612 6.06916 73.5643 6.06431 73.5679 6.05888C73.603 6.00546 73.6753 5.89543 73.7287 5.7703C73.774 5.66419 73.8069 5.55321 73.8267 5.43956C73.8501 5.30554 73.8494 5.17388 73.8491 5.10997C73.8491 5.10348 73.8491 5.09768 73.8491 5.09265V2.8C73.8491 2.79239 73.8491 2.78467 73.8491 2.77685C73.8491 2.65773 73.8492 2.51548 73.8389 2.39017C73.8271 2.24495 73.7966 2.03696 73.6856 1.81901C73.5418 1.53677 73.3123 1.3073 73.03 1.16349C72.8121 1.05244 72.6041 1.022 72.4589 1.01013C72.3336 0.999894 72.1913 0.999949 72.0722 0.999994L72.0491 1H55.0453C55.0377 1 55.03 0.999997 55.0221 0.999994C54.903 0.999949 54.7608 0.999894 54.6355 1.01013C54.4902 1.022 54.2822 1.05244 54.0643 1.16349C53.7821 1.3073 53.5526 1.53677 53.4088 1.81901C53.2977 2.03696 53.2673 2.24495 53.2554 2.39017C53.2452 2.51549 53.2452 2.65775 53.2453 2.77686C53.2453 2.78468 53.2453 2.79239 53.2453 2.8V5.85405C53.2453 5.86166 53.2453 5.86937 53.2453 5.87719C53.2452 5.99631 53.2452 6.13856 53.2554 6.26388C53.2673 6.4091 53.2977 6.61709 53.4088 6.83504C53.5526 7.11728 53.7821 7.34675 54.0643 7.49056C54.2822 7.60161 54.4902 7.63205 54.6355 7.64392C54.7608 7.65416 54.903 7.6541 55.0221 7.65406C55.03 7.65406 55.0377 7.65405 55.0453 7.65405H64.1736Z" strokeWidth="2"/>
        </svg>
      </Hero>

      <Title>최근 포스트</Title>
      <List>
        {postsData.map(post => {
          return (
            <Item key={post.id}>
              <Link to={post.fields.slug}>
                <div>
                  <ItemHeader>
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.fields.date}</p>
                  </ItemHeader>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            </Item>
          )
        })}
      </List>
    </Wrap>
  )
}

export default HomeComponent
