/*
 * @Author: st004362
 * @Date: 2025-04-03 16:18:48
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-03 16:49:17
 * @Description: 
 */
import Heading from './Heading.tsx';
import Section from './Section.tsx';

export default function PageDemo() {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
