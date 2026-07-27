import { chapters, closingLines, type ContentBlock } from "./content";
import { ReadingChrome } from "./reading-chrome";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="principle-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function RenderBlock({
  block,
  chapterNumber,
  blockIndex,
}: {
  block: ContentBlock;
  chapterNumber: string;
  blockIndex: number;
}) {
  return (
    <div
      className={`content-block ${block.title ? "content-block--titled" : ""}`}
      id={`chapter-${chapterNumber}-block-${blockIndex + 1}`}
    >
      {block.label ? <p className="block-label">{block.label}</p> : null}
      {block.title ? <h3>{block.title}</h3> : null}

      {block.forestNote ? (
        <aside className="forest-note">
          <span>林间</span>
          <p>{block.forestNote}</p>
        </aside>
      ) : null}

      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {block.points ? (
        <div className="point-grid">
          {block.points.map((point, pointIndex) => (
            <div className="point-card" key={`${point.title}-${pointIndex}`}>
              <span>{String(pointIndex + 1).padStart(2, "0")}</span>
              {point.title ? <h4>{point.title}</h4> : null}
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      ) : null}

      {block.quote ? (
        <blockquote>
          <span aria-hidden="true">“</span>
          <p>{block.quote}</p>
        </blockquote>
      ) : null}

      {block.bullets ? <BulletList items={block.bullets} /> : null}

      {block.subsections?.map((subsection) => (
        <div className="subsection" key={subsection.title}>
          <h4>{subsection.title}</h4>
          {subsection.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {subsection.bullets ? (
            <BulletList items={subsection.bullets} />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ReadingChrome />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回页面顶部">
          <span className="wordmark-seed" aria-hidden="true" />
          <span>如实</span>
        </a>
        <nav className="header-nav" aria-label="主要导航">
          <a href="#roots">内核</a>
          <a href="#growth">生长</a>
          <a href="#weather">经风</a>
          <a href="#forest">实践</a>
        </nav>
        <a className="header-action" href="rushi-erxing.pdf" download>
          下载原文
          <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">SHULIN / LIVING VALUES</p>
            <h1 id="hero-title">
              <span>如实而行</span>
              <span>各自成林</span>
            </h1>
            <p className="hero-subtitle">
              一套从诚实出发，在选择与关系里长成的思想
            </p>
            <div className="hero-manifesto">
              <span aria-hidden="true" />
              <p>
                不瞒自己，也不躲开事实。
                <br />
                把方向握在手里，把说过的话做进现实。
                <br />
                有了力量，仍然把人当人。
              </p>
            </div>
            <div className="hero-actions">
              <a className="button button--primary" href="#arrival">
                开始阅读
                <span aria-hidden="true">↘</span>
              </a>
              <a className="button button--quiet" href="#contents">
                浏览目录
              </a>
            </div>
            <dl className="hero-meta">
              <div>
                <dt>章节</dt>
                <dd>07</dd>
              </div>
              <div>
                <dt>原稿</dt>
                <dd>17 页</dd>
              </div>
              <div>
                <dt>版本</dt>
                <dd>V2.4</dd>
              </div>
            </dl>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="forest-rings">
              <span />
              <span />
              <span />
              <span />
              <span />
              <i className="ring-seed" />
            </div>
            <p>ROOT / GROW / WEATHER / RETURN</p>
            <div className="tree-lines">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className="contents" id="contents" aria-labelledby="contents-title">
          <div className="section-intro">
            <p className="eyebrow">CONTENTS / 目录</p>
            <h2 id="contents-title">一条回来之路</h2>
            <p>
              从看见真实开始，经过选择、承诺、关系与力量，
              最后回到一个人当下的行动。
            </p>
          </div>
          <ol className="contents-grid">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`}>
                  <span className="contents-number">{chapter.number}</span>
                  <span className="contents-copy">
                    <small>{chapter.kicker}</small>
                    <strong>{chapter.title}</strong>
                    <em>{chapter.subtitle}</em>
                  </span>
                  <span className="contents-arrow" aria-hidden="true">
                    ↘
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <div className="reading-shell">
          <aside className="side-index" aria-label="章节目录">
            <p>READING PATH</p>
            <ol>
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <a href={`#${chapter.id}`}>
                    <span>{chapter.number}</span>
                    {chapter.title}
                  </a>
                </li>
              ))}
            </ol>
            <div className="side-index-note">
              <span aria-hidden="true" />
              <p>方向可以稳定，方法可以变化。</p>
            </div>
          </aside>

          <article className="book" aria-label="《如实而行，各自成林》全文">
            {chapters.map((chapter, chapterIndex) => (
              <section
                className={`chapter chapter--${chapter.id}`}
                id={chapter.id}
                key={chapter.id}
              >
                <header className="chapter-header">
                  <div>
                    <p>
                      {chapter.number} / {chapter.kicker}
                    </p>
                    <span>{String(chapterIndex + 1).padStart(2, "0")}</span>
                  </div>
                  <h2>{chapter.title}</h2>
                  <p className="chapter-subtitle">{chapter.subtitle}</p>
                </header>

                <div className="chapter-body">
                  {chapter.blocks.map((block, blockIndex) => (
                    <RenderBlock
                      block={block}
                      chapterNumber={chapter.number}
                      blockIndex={blockIndex}
                      key={`${chapter.id}-${blockIndex}`}
                    />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>

        <section className="closing" aria-labelledby="closing-title">
          <div className="closing-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="eyebrow">RETURN / 归来</p>
          <h2 id="closing-title">不必背下整片森林</h2>
          <ol>
            {closingLines.map((line, index) => (
              <li key={line}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{line}</p>
              </li>
            ))}
          </ol>
          <p className="closing-note">
            等这些话在关键处自己出现，它们便已经长进选择，
            长成了自己的样子。
          </p>
        </section>
      </main>

      <footer>
        <div>
          <span className="wordmark-seed" aria-hidden="true" />
          <p>如实而行，各自成林</p>
        </div>
        <p>REVISED EDITION / V2.4 / 2026.07</p>
        <a href="#top">
          回到开头 <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
