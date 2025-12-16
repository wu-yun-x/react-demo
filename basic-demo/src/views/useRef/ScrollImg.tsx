/*
 * @Author: st004362
 * @Date: 2025-12-16 17:44:08
 * @LastEditTime: 2025-12-16 17:46:22
 * @Description: ScrollImg
 */
import { useRef } from "react";

type ScrollNum = 0 | 1 | 2;
export default function CatFriends() {
  const listRef = useRef<HTMLUListElement | null>(null);

  function scrollToIndex(index: ScrollNum): void {
    const listNode = listRef.current;
    if (!listNode) return;
    // This line assumes a particular DOM structure:
    const imgNode =
      listNode.querySelectorAll<HTMLImageElement>("li > img")[index];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Neo</button>
        <button onClick={() => scrollToIndex(1)}>Millie</button>
        <button onClick={() => scrollToIndex(2)}>Bella</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placecats.com/neo/300/200" alt="Neo" />
          </li>
          <li>
            <img src="https://placecats.com/millie/200/200" alt="Millie" />
          </li>
          <li>
            <img src="https://placecats.com/bella/199/200" alt="Bella" />
          </li>
        </ul>
      </div>
    </>
  );
}
