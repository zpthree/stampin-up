import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, { Layout } from '../components/index';
import { getPages, Link, safePrefix } from '../utils';

export default class Items extends React.Component {
  render() {
    const display_items = _.orderBy(
      getPages(this.props.pageContext.pages, '/items'),
      'frontmatter.date',
      'desc'
    );
    return (
      <Layout {...this.props}>
        <div className="post-feed">
          {_.map(
            _.get(this.props, 'pageContext.frontmatter.sections'),
            (section, section_idx) => {
              const GetSectionComponent =
                components[_.get(section, 'component')];
              return (
                <GetSectionComponent
                  key={section_idx}
                  {...this.props}
                  section={section}
                  site={this.props.pageContext.site}
                />
              );
            }
          )}
          {_.map(display_items, (item, item_idx) => (
            <article key={item_idx} className="post post-card">
              <div className="post-card-inside">
                {_.get(item, 'frontmatter.thumb_img_path') && (
                  <Link
                    className="post-card-thumbnail"
                    to={safePrefix(_.get(item, 'url'))}
                  >
                    <img
                      className="thumbnail"
                      src={safePrefix(
                        _.get(item, 'frontmatter.thumb_img_path')
                      )}
                      alt={_.get(item, 'frontmatter.title')}
                    />
                  </Link>
                )}
                <div className="post-card-content">
                  <header className="post-header">
                    <div className="post-meta">
                      <time
                        className="published"
                        dateTime={moment(
                          _.get(item, 'frontmatter.date')
                        ).strftime('%Y-%m-%d %H:%M')}
                      >
                        {moment(_.get(item, 'frontmatter.date')).strftime(
                          '%B %d, %Y'
                        )}
                      </time>
                    </div>
                    <h2 className="post-title">
                      <Link to={safePrefix(_.get(item, 'url'))} rel="bookmark">
                        {_.get(item, 'frontmatter.title')}
                      </Link>
                    </h2>
                  </header>
                  <div className="post-excerpt">
                    <p>{_.get(item, 'frontmatter.excerpt')}</p>
                    <p className="read-more">
                      <Link
                        className="button inverse"
                        to={safePrefix(_.get(item, 'url'))}
                      >
                        Read more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Layout>
    );
  }
}
