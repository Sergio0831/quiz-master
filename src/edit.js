import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
  return <p {...useBlockProps()}>Hello World - Block Editor</p>;
}