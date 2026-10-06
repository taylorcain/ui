'use client';

import { useState, type FC, type ReactNode } from 'react';
import IconCopyButton from '@/components/icon-copy-button';

interface Icon {
  name: string;
  renderedicon: ReactNode;
  svg: string;
  jsx: string;
}

type IconsProps = {
  variant?: 'default' | 'preview' | 'single-column'
  reverse?: boolean
  query?: string
  showSearch?: boolean
}

const Icons: FC<IconsProps> = ({
  variant = 'default',
  reverse = false,
  query,
  showSearch = true,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<'svg' | 'jsx' | null>(null);
  const iconsArray: Icon[] = [
    {
      name: 'arrow-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 19.5L19.5 12M12 19.5V4.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12L12 19.5L19.5 12M12 19.5V4.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 19.5L19.5 12M12 19.5V4.5"/>
            </svg>`,
    },
    {
      name: 'arrow-down-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.48,15.69l6.52,6.52,6.52-6.52M12,22.21V1.79"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.48,15.69l6.52,6.52,6.52-6.52M12,22.21V1.79"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.48,15.69l6.52,6.52,6.52-6.52M12,22.21V1.79"/>
            </svg>`,
    },
    {
      name: 'arrow-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5L4.5 12L12 4.5M4.5 12H19.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5L4.5 12L12 4.5M4.5 12H19.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5L4.5 12L12 4.5M4.5 12H19.5"/>
            </svg>`,
    },
    {
      name: 'arrow-left-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.31,5.48L1.79,12l6.52,6.52M1.79,12h20.42"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.31,5.48L1.79,12l6.52,6.52M1.79,12h20.42"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.31,5.48L1.79,12l6.52,6.52M1.79,12h20.42"/>
            </svg>`,
    },
    {
      name: 'arrow-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5L19.5 12L12 19.5M19.5 12H4.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5L19.5 12L12 19.5M19.5 12H4.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5L19.5 12L12 19.5M19.5 12H4.5"/>
            </svg>`,
    },
    {
      name: 'arrow-right-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.69,18.52l6.52-6.52-6.52-6.52M22.21,12H1.79"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.69,18.52l6.52-6.52-6.52-6.52M22.21,12H1.79"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.69,18.52l6.52-6.52-6.52-6.52M22.21,12H1.79"/>
            </svg>`,
    },
    {
      name: 'arrow-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 4.5L19.5 12M12 4.5V19.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12L12 4.5L19.5 12M12 4.5V19.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 4.5L19.5 12M12 4.5V19.5"/>
            </svg>`,
    },
    {
      name: 'arrow-up-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.52,8.31L12,1.79l-6.52,6.52M12,1.79v20.42"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.52,8.31L12,1.79l-6.52,6.52M12,1.79v20.42"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.52,8.31L12,1.79l-6.52,6.52M12,1.79v20.42"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="19.5 8.25 12 15.75 4.5 8.25"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="19.5 8.25 12 15.75 4.5 8.25"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="19.5 8.25 12 15.75 4.5 8.25"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="15.75 19.5 8.25 12 15.75 4.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="15.75 19.5 8.25 12 15.75 4.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="15.75 19.5 8.25 12 15.75 4.5"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="8.25 4.5 15.75 12 8.25 19.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="8.25 4.5 15.75 12 8.25 19.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="8.25 4.5 15.75 12 8.25 19.5"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="4.5 15.75 12 8.25 19.5 15.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="4.5 15.75 12 8.25 19.5 15.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="4.5 15.75 12 8.25 19.5 15.75"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15.58 12.48L12 16.06L8.42 12.48M12 16.06V7.94"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15.58 12.48L12 16.06L8.42 12.48M12 16.06V7.94"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15.58 12.48L12 16.06L8.42 12.48M12 16.06V7.94"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,21c-4.97,0-9-4.03-9-9S7.03,3,12,3s9,4.03,9,9-4.03,9-9,9ZM11.52,15.58l-3.58-3.58,3.58-3.58M7.94,12h8.12"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,21c-4.97,0-9-4.03-9-9S7.03,3,12,3s9,4.03,9,9-4.03,9-9,9ZM11.52,15.58l-3.58-3.58,3.58-3.58M7.94,12h8.12"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,21c-4.97,0-9-4.03-9-9S7.03,3,12,3s9,4.03,9,9-4.03,9-9,9ZM11.52,15.58l-3.58-3.58,3.58-3.58M7.94,12h8.12"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,3c4.97,0,9,4.03,9,9s-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3ZM12.48,8.42l3.58,3.58-3.58,3.58M16.06,12H7.94"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,3c4.97,0,9,4.03,9,9s-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3ZM12.48,8.42l3.58,3.58-3.58,3.58M16.06,12H7.94"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,3c4.97,0,9,4.03,9,9s-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3ZM12.48,8.42l3.58,3.58-3.58,3.58M16.06,12H7.94"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3,12c0-4.97,4.03-9,9-9s9,4.03,9,9c0,4.97-4.03,9-9,9S3,16.97,3,12ZM8.42,11.52l3.58-3.58,3.58,3.58M12,7.94v8.12"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3,12c0-4.97,4.03-9,9-9s9,4.03,9,9c0,4.97-4.03,9-9,9S3,16.97,3,12ZM8.42,11.52l3.58-3.58,3.58,3.58M12,7.94v8.12"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3,12c0-4.97,4.03-9,9-9s9,4.03,9,9c0,4.97-4.03,9-9,9S3,16.97,3,12ZM8.42,11.52l3.58-3.58,3.58,3.58M12,7.94v8.12"/>
            </svg>`,
    },
    {
      name: 'arrow-down-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,17.3H6.69s0-10.61,0-10.61M6.7,17.31l10.61-10.61"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.3,17.3H6.69s0-10.61,0-10.61M6.7,17.31l10.61-10.61"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,17.3H6.69s0-10.61,0-10.61M6.7,17.31l10.61-10.61"/>
            </svg>`,
    },
    {
      name: 'arrow-down-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,6.7v10.61s-10.61,0-10.61,0M17.3,17.3L6.69,6.69"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.3,6.7v10.61s-10.61,0-10.61,0M17.3,17.3L6.69,6.69"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,6.7v10.61s-10.61,0-10.61,0M17.3,17.3L6.69,6.69"/>
            </svg>`,
    },
    {
      name: 'arrow-up-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,17.3V6.69s10.61,0,10.61,0M6.69,6.7l10.61,10.61"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.7,17.3V6.69s10.61,0,10.61,0M6.69,6.7l10.61,10.61"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,17.3V6.69s10.61,0,10.61,0M6.69,6.7l10.61,10.61"/>
            </svg>`,
    },
    {
      name: 'arrow-up-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,6.7h10.61s0,10.61,0,10.61M17.3,6.7l-10.61,10.61"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.7,6.7h10.61s0,10.61,0,10.61M17.3,6.7l-10.61,10.61"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,6.7h10.61s0,10.61,0,10.61M17.3,6.7l-10.61,10.61"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-down-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.21 20.21L3.75 15.75L8.21 11.29M3.75 15.75H20.25V4.24"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.21 20.21L3.75 15.75L8.21 11.29M3.75 15.75H20.25V4.24"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.21 20.21L3.75 15.75L8.21 11.29M3.75 15.75H20.25V4.24"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-down-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,11.07l4.46,4.46-4.46,4.46M3.75,4.02v11.51s16.5,0,16.5,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.79,11.07l4.46,4.46-4.46,4.46M3.75,4.02v11.51s16.5,0,16.5,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,11.07l4.46,4.46-4.46,4.46M3.75,4.02v11.51s16.5,0,16.5,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-left-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.94,15.79l-4.46,4.46-4.46-4.46M19.99,3.75h-11.51v16.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.94,15.79l-4.46,4.46-4.46-4.46M19.99,3.75h-11.51v16.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.94,15.79l-4.46,4.46-4.46-4.46M19.99,3.75h-11.51v16.5"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-left-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.02,8.21l4.46-4.46,4.46,4.46M8.48,3.75v16.5s11.51,0,11.51,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.02,8.21l4.46-4.46,4.46,4.46M8.48,3.75v16.5s11.51,0,11.51,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.02,8.21l4.46-4.46,4.46,4.46M8.48,3.75v16.5s11.51,0,11.51,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-right-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.99,15.79l-4.46,4.46-4.46-4.46M15.53,20.25V3.75s-11.51,0-11.51,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.99,15.79l-4.46,4.46-4.46-4.46M15.53,20.25V3.75s-11.51,0-11.51,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.99,15.79l-4.46,4.46-4.46-4.46M15.53,20.25V3.75s-11.51,0-11.51,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-right-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.07,8.21l4.46-4.46,4.46,4.46M4.02,20.25h11.51V3.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.07,8.21l4.46-4.46,4.46,4.46M4.02,20.25h11.51V3.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.07,8.21l4.46-4.46,4.46,4.46M4.02,20.25h11.51V3.75"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-up-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.21,12.94l-4.46-4.46,4.46-4.46M20.25,19.98v-11.51s-16.5,0-16.5,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.21,12.94l-4.46-4.46,4.46-4.46M20.25,19.98v-11.51s-16.5,0-16.5,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.21,12.94l-4.46-4.46,4.46-4.46M20.25,19.98v-11.51s-16.5,0-16.5,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-up-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,4.02l4.46,4.46-4.46,4.46M20.25,8.48H3.75s0,11.51,0,11.51"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.79,4.02l4.46,4.46-4.46,4.46M20.25,8.48H3.75s0,11.51,0,11.51"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,4.02l4.46,4.46-4.46,4.46M20.25,8.48H3.75s0,11.51,0,11.51"/>
            </svg>`,
    },
    {
      name: 'bars-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 8.24 L 20.25 8.24 M 3.75 15.76 L 20.25 15.76"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M 3.75 8.24 L 20.25 8.24 M 3.75 15.76 L 20.25 15.76"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 8.24 L 20.25 8.24 M 3.75 15.76 L 20.25 15.76"/>
            </svg>`,
    },
    {
      name: 'bars-2-bottom-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M3.75,15.76h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,8.24h16.5M3.75,15.76h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M3.75,15.76h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-2-bottom-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M9.23,15.76h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,8.24h16.5M9.23,15.76h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M9.23,15.76h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-3',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 6.25 L 20.25 6.25 M 3.75 12 L 20.25 12 M 3.75 17.75 L 20.25 17.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M 3.75 6.25 L 20.25 6.25 M 3.75 12 L 20.25 12 M 3.75 17.75 L 20.25 17.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 6.25 L 20.25 6.25 M 3.75 12 L 20.25 12 M 3.75 17.75 L 20.25 17.75"/>
            </svg>`,
    },
    {
      name: 'bars-3-bottom-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M3.75,17.75h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M3.75,17.75h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M3.75,17.75h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-3-bottom-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M9.23,17.75h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M9.23,17.75h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M9.23,17.75h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-4',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,5.21h16.5M3.75,9.74h16.5M3.75,14.26h16.5M3.75,18.79h16.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,5.21h16.5M3.75,9.74h16.5M3.75,14.26h16.5M3.75,18.79h16.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,5.21h16.5M3.75,9.74h16.5M3.75,14.26h16.5M3.75,18.79h16.5"/>
            </svg>`,
    },
    {
      name: 'collapse',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M14.23,3.77v6h6M14.23,9.77l6-6M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6M9.77,20.23v-6H3.77M9.77,14.23l-6,6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" fill="none" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M14.23,3.77v6h6M14.23,9.77l6-6M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6M9.77,20.23v-6H3.77M9.77,14.23l-6,6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M14.23,3.77v6h6M14.23,9.77l6-6M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6M9.77,20.23v-6H3.77M9.77,14.23l-6,6"/>
            </svg>`,
    },
    {
      name: 'collapse-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" fill="none" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6"/>
            </svg>`,
    },
    {
      name: 'collapse-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5,9.85l-7.5,7.5-7.5-7.5M12,17.35V2.35M19.5,19.89h-15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5,9.85l-7.5,7.5-7.5-7.5M12,17.35V2.35M19.5,19.89h-15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5,9.85l-7.5,7.5-7.5-7.5M12,17.35V2.35M19.5,19.89h-15"/>
            </svg>`,
    },
    {
      name: 'collapse-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.15,19.5l-7.5-7.5,7.5-7.5M6.65,12h15M4.11,19.5v-15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.15,19.5l-7.5-7.5,7.5-7.5M6.65,12h15M4.11,19.5v-15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.15,19.5l-7.5-7.5,7.5-7.5M6.65,12h15M4.11,19.5v-15"/>
            </svg>`,
    },
    {
      name: 'collapse-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.85,4.5l7.5,7.5-7.5,7.5M17.35,12H2.35M19.89,4.5v15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.85,4.5l7.5,7.5-7.5,7.5M17.35,12H2.35M19.89,4.5v15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.85,4.5l7.5,7.5-7.5,7.5M17.35,12H2.35M19.89,4.5v15"/>
            </svg>`,
    },
    {
      name: 'collapse-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,14.15l7.5-7.5,7.5,7.5M12,6.65v15M4.5,4.11h15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5,14.15l7.5-7.5,7.5,7.5M12,6.65v15M4.5,4.11h15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,14.15l7.5-7.5,7.5,7.5M12,6.65v15M4.5,4.11h15"/>
            </svg>`,
    },
    {
      name: 'copy',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" fill="none" d="M4.26 11.33a2.07 2.07 0 0 1 2.07-2.07h6.34a2.07 2.07 0 0 1 2.07 2.07v6.34a2.07 2.07 0 0 1-2.07 2.07H6.33a2.07 2.07 0 0 1-2.07-2.07v-6.34ZM14.74 14.74h2.94a2.07 2.07 0 0 0 2.07-2.07v-6.34a2.07 2.07 0 0 0-2.07-2.07h-6.34a2.07 2.07 0 0 0-2.07 2.07v2.94"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" fill="none" d="M4.26 11.33a2.07 2.07 0 0 1 2.07-2.07h6.34a2.07 2.07 0 0 1 2.07 2.07v6.34a2.07 2.07 0 0 1-2.07 2.07H6.33a2.07 2.07 0 0 1-2.07-2.07v-6.34ZM14.74 14.74h2.94a2.07 2.07 0 0 0 2.07-2.07v-6.34a2.07 2.07 0 0 0-2.07-2.07h-6.34a2.07 2.07 0 0 0-2.07 2.07v2.94"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" fill="none" d="M4.26 11.33a2.07 2.07 0 0 1 2.07-2.07h6.34a2.07 2.07 0 0 1 2.07 2.07v6.34a2.07 2.07 0 0 1-2.07 2.07H6.33a2.07 2.07 0 0 1-2.07-2.07v-6.34ZM14.74 14.74h2.94a2.07 2.07 0 0 0 2.07-2.07v-6.34a2.07 2.07 0 0 0-2.07-2.07h-6.34a2.07 2.07 0 0 0-2.07 2.07v2.94"/>
            </svg>`,
    },
    {
      name: 'check',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75"/>
            </svg>`,
    },
    {
      name: 'download',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.43 11.07L12 16.5L6.57 11.07M12 16.5V4.02M21.53 16.26v2.24c0 1.38-1.12 2.5-2.5 2.5H4.97c-1.38 0-2.5-1.12-2.5-2.5v-2.24"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.43 11.07L12 16.5L6.57 11.07M12 16.5V4.02M21.53 16.26v2.24c0 1.38-1.12 2.5-2.5 2.5H4.97c-1.38 0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.43 11.07L12 16.5L6.57 11.07M12 16.5V4.02M21.53 16.26v2.24c0 1.38-1.12 2.5-2.5 2.5H4.97c-1.38 0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
    },
    {
      name: 'expand',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M20.23,9.77V3.77s-6,0-6,0M20.23,3.77l-6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6M3.77,14.23v6h6M3.77,20.23l6-6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M20.23,9.77V3.77s-6,0-6,0M20.23,3.77l-6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6M3.77,14.23v6h6M3.77,20.23l6-6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M20.23,9.77V3.77s-6,0-6,0M20.23,3.77l-6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6M3.77,14.23v6h6M3.77,20.23l6-6"/>
            </svg>`,
    },
    {
      name: 'expand-simple',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6"/>
            </svg>`,
    },
    {
      name: 'facebook',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M24,12.07C24,5.41,18.63,0,12,0,5.37,0,0,5.41,0,12.07c0,6.02,4.39,11.02,10.12,11.93v-8.44h-3.04v-3.49h3.05v-2.66c0-3.03,1.79-4.7,4.53-4.7,1.31,0,2.69.24,2.69.24v2.97h-1.51c-1.49,0-1.95.93-1.95,1.89v2.26h3.33l-.53,3.49h-2.8v8.44c5.74-.91,10.12-5.9,10.12-11.93h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24,12.07C24,5.41,18.63,0,12,0,5.37,0,0,5.41,0,12.07c0,6.02,4.39,11.02,10.12,11.93v-8.44h-3.04v-3.49h3.05v-2.66c0-3.03,1.79-4.7,4.53-4.7,1.31,0,2.69.24,2.69.24v2.97h-1.51c-1.49,0-1.95.93-1.95,1.89v2.26h3.33l-.53,3.49h-2.8v8.44c5.74-.91,10.12-5.9,10.12-11.93h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M24,12.07C24,5.41,18.63,0,12,0,5.37,0,0,5.41,0,12.07c0,6.02,4.39,11.02,10.12,11.93v-8.44h-3.04v-3.49h3.05v-2.66c0-3.03,1.79-4.7,4.53-4.7,1.31,0,2.69.24,2.69.24v2.97h-1.51c-1.49,0-1.95.93-1.95,1.89v2.26h3.33l-.53,3.49h-2.8v8.44c5.74-.91,10.12-5.9,10.12-11.93h0Z"/>
            </svg>`,
    },
    {
      name: 'file',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.94,3.55v4.54c0,1.1.89,2,2,2h4.54M18.72,10.66v8.04c0,1.11-.9,2-2,2H7.28c-1.11,0-2-.9-2-2V5.3c0-1.11.9-2,2-2h4.08c.53,0,1.04.21,1.42.59l5.36,5.36c.38.38.59.89.59,1.42Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.94,3.55v4.54c0,1.1.89,2,2,2h4.54M18.72,10.66v8.04c0,1.11-.9,2-2,2H7.28c-1.11,0-2-.9-2-2V5.3c0-1.11.9-2,2-2h4.08c.53,0,1.04.21,1.42.59l5.36,5.36c.38.38.59.89.59,1.42Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.94,3.55v4.54c0,1.1.89,2,2,2h4.54M18.72,10.66v8.04c0,1.11-.9,2-2,2H7.28c-1.11,0-2-.9-2-2V5.3c0-1.11.9-2,2-2h4.08c.53,0,1.04.21,1.42.59l5.36,5.36c.38.38.59.89.59,1.42Z"/>
            </svg>`,
    },
    {
      name: 'filter-horizontal',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.32 6.76H6.83M9.92 6.76H20.68M3.32 12H14.08M17.17 12H20.68M3.32 17.24H6.83M9.92 17.24H20.68M15.63 13.54a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 8.3a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 18.78a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.32 6.76H6.83M9.92 6.76H20.68M3.32 12H14.08M17.17 12H20.68M3.32 17.24H6.83M9.92 17.24H20.68M15.63 13.54a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 8.3a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 18.78a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.32 6.76H6.83M9.92 6.76H20.68M3.32 12H14.08M17.17 12H20.68M3.32 17.24H6.83M9.92 17.24H20.68M15.63 13.54a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 8.3a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 18.78a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Z"/>
            </svg>`,
    },
    {
      name: 'filter-vertical',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.76,20.68v-3.51M6.76,14.08V3.32M12,20.68v-10.76M12,6.83v-3.51M17.24,20.68v-3.51M17.24,14.08V3.32M13.54,8.37c0,.85-.69,1.54-1.54,1.54s-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM8.3,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM18.78,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.76,20.68v-3.51M6.76,14.08V3.32M12,20.68v-10.76M12,6.83v-3.51M17.24,20.68v-3.51M17.24,14.08V3.32M13.54,8.37c0,.85-.69,1.54-1.54,1.54s-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM8.3,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM18.78,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.76,20.68v-3.51M6.76,14.08V3.32M12,20.68v-10.76M12,6.83v-3.51M17.24,20.68v-3.51M17.24,14.08V3.32M13.54,8.37c0,.85-.69,1.54-1.54,1.54s-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM8.3,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM18.78,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54Z"/>
            </svg>`,
    },
    {
      name: 'folder',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20,20.29c1.1,0,2-.9,2-2v-9.58c0-1.1-.9-2-2-2h-7.9c-.68,0-1.32-.33-1.69-.9l-.81-1.2c-.37-.56-1-.9-1.67-.9h-3.93c-1.1,0-2,.9-2,2v12.58c0,1.1.9,2,2,2h16Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20,20.29c1.1,0,2-.9,2-2v-9.58c0-1.1-.9-2-2-2h-7.9c-.68,0-1.32-.33-1.69-.9l-.81-1.2c-.37-.56-1-.9-1.67-.9h-3.93c-1.1,0-2,.9-2,2v12.58c0,1.1.9,2,2,2h16Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20,20.29c1.1,0,2-.9,2-2v-9.58c0-1.1-.9-2-2-2h-7.9c-.68,0-1.32-.33-1.69-.9l-.81-1.2c-.37-.56-1-.9-1.67-.9h-3.93c-1.1,0-2,.9-2,2v12.58c0,1.1.9,2,2,2h16Z"/>
            </svg>`,
    },
    {
      name: 'github',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M11.99.31C5.36.31,0,5.67,0,12.29c0,5.31,3.43,9.79,8.19,11.38.6.1.82-.26.82-.57,0-.29-.01-1.23-.01-2.23-3.01.56-3.8-.73-4.03-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.01-.8.94-.01,1.62.87,1.84,1.23,1.08,1.81,2.8,1.3,3.5.99.1-.78.42-1.3.77-1.6-2.66-.3-5.45-1.33-5.45-5.92,0-1.3.47-2.39,1.23-3.22-.12-.3-.54-1.53.12-3.17,0,0,1-.31,3.3,1.23.95-.27,1.98-.4,3-.4s2.04.13,3,.4c2.3-1.55,3.3-1.23,3.3-1.23.65,1.65.24,2.88.12,3.17.77.84,1.23,1.9,1.23,3.22,0,4.6-2.8,5.62-5.47,5.92.43.38.81,1.1.81,2.22,0,1.6-.01,2.9-.01,3.3,0,.31.22.69.82.57,4.88-1.64,8.17-6.23,8.17-11.38-.02-6.63-5.38-11.99-12.01-11.99h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M11.99.31C5.36.31,0,5.67,0,12.29c0,5.31,3.43,9.79,8.19,11.38.6.1.82-.26.82-.57,0-.29-.01-1.23-.01-2.23-3.01.56-3.8-.73-4.03-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.01-.8.94-.01,1.62.87,1.84,1.23,1.08,1.81,2.8,1.3,3.5.99.1-.78.42-1.3.77-1.6-2.66-.3-5.45-1.33-5.45-5.92,0-1.3.47-2.39,1.23-3.22-.12-.3-.54-1.53.12-3.17,0,0,1-.31,3.3,1.23.95-.27,1.98-.4,3-.4s2.04.13,3,.4c2.3-1.55,3.3-1.23,3.3-1.23.65,1.65.24,2.88.12,3.17.77.84,1.23,1.9,1.23,3.22,0,4.6-2.8,5.62-5.47,5.92.43.38.81,1.1.81,2.22,0,1.6-.01,2.9-.01,3.3,0,.31.22.69.82.57,4.88-1.64,8.17-6.23,8.17-11.38-.02-6.63-5.38-11.99-12.01-11.99h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M11.99.31C5.36.31,0,5.67,0,12.29c0,5.31,3.43,9.79,8.19,11.38.6.1.82-.26.82-.57,0-.29-.01-1.23-.01-2.23-3.01.56-3.8-.73-4.03-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.01-.8.94-.01,1.62.87,1.84,1.23,1.08,1.81,2.8,1.3,3.5.99.1-.78.42-1.3.77-1.6-2.66-.3-5.45-1.33-5.45-5.92,0-1.3.47-2.39,1.23-3.22-.12-.3-.54-1.53.12-3.17,0,0,1-.31,3.3,1.23.95-.27,1.98-.4,3-.4s2.04.13,3,.4c2.3-1.55,3.3-1.23,3.3-1.23.65,1.65.24,2.88.12,3.17.77.84,1.23,1.9,1.23,3.22,0,4.6-2.8,5.62-5.47,5.92.43.38.81,1.1.81,2.22,0,1.6-.01,2.9-.01,3.3,0,.31.22.69.82.57,4.88-1.64,8.17-6.23,8.17-11.38-.02-6.63-5.38-11.99-12.01-11.99h0Z"/>
            </svg>`,
    },
    {
      name: 'instagram',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M12.02,0C8.75,0,8.34.01,7.06.07c-1.28.07-2.16.27-2.91.57-.8.3-1.52.78-2.12,1.39-.61.6-1.08,1.32-1.39,2.12-.3.76-.5,1.63-.57,2.9-.06,1.29-.07,1.7-.07,4.96s.01,3.67.07,4.94c.06,1.28.26,2.14.56,2.91.31.79.72,1.46,1.39,2.12s1.33,1.08,2.12,1.39c.77.3,1.63.5,2.91.56,1.29.07,1.7.08,4.96.08s3.67-.01,4.95-.07,2.16-.26,2.91-.56c.8-.3,1.52-.78,2.12-1.39.67-.67,1.08-1.33,1.39-2.12.3-.77.5-1.63.56-2.91s.07-1.69.07-4.94-.01-3.67-.07-4.94-.27-2.14-.56-2.91c-.3-.8-.78-1.52-1.39-2.12-.6-.61-1.32-1.09-2.12-1.39-.77-.3-1.63-.5-2.91-.56-1.27-.08-1.68-.09-4.94-.09h0ZM10.93,2.17h1.08c3.2,0,3.59.01,4.85.07,1.17.06,1.81.24,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.17.42.36,1.06.41,2.22.06,1.27.07,1.64.07,4.84s-.01,3.59-.07,4.84c-.06,1.17-.24,1.8-.41,2.22-.19.52-.5.99-.9,1.38-.42.42-.82.68-1.38.9-.42.17-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.8-.24-2.22-.41-.52-.19-.99-.5-1.38-.9-.4-.39-.71-.86-.9-1.38-.17-.42-.36-1.06-.41-2.22-.06-1.27-.07-1.64-.07-4.84s.01-3.58.07-4.84c.06-1.17.24-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.42-.17,1.06-.36,2.22-.41,1.09-.04,1.52-.06,3.76-.06,0-.01,0,0,0,0ZM18.43,4.16c-.8,0-1.45.64-1.45,1.44s.64,1.44,1.45,1.44h0c.8,0,1.45-.64,1.45-1.44s-.66-1.44-1.45-1.44ZM12.02,5.83c-3.4-.06-6.21,2.67-6.26,6.07-.06,3.4,2.67,6.21,6.07,6.26h.19c3.4-.06,6.13-2.86,6.07-6.26-.06-3.32-2.73-6.01-6.07-6.07ZM12.02,8c2.21,0,4,1.79,4,4s-1.79,4-4,4h0c-2.21,0-4-1.79-4-4s1.78-4,4-4Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.02,0C8.75,0,8.34.01,7.06.07c-1.28.07-2.16.27-2.91.57-.8.3-1.52.78-2.12,1.39-.61.6-1.08,1.32-1.39,2.12-.3.76-.5,1.63-.57,2.9-.06,1.29-.07,1.7-.07,4.96s.01,3.67.07,4.94c.06,1.28.26,2.14.56,2.91.31.79.72,1.46,1.39,2.12s1.33,1.08,2.12,1.39c.77.3,1.63.5,2.91.56,1.29.07,1.7.08,4.96.08s3.67-.01,4.95-.07,2.16-.26,2.91-.56c.8-.3,1.52-.78,2.12-1.39.67-.67,1.08-1.33,1.39-2.12.3-.77.5-1.63.56-2.91s.07-1.69.07-4.94-.01-3.67-.07-4.94-.27-2.14-.56-2.91c-.3-.8-.78-1.52-1.39-2.12-.6-.61-1.32-1.09-2.12-1.39-.77-.3-1.63-.5-2.91-.56-1.27-.08-1.68-.09-4.94-.09h0ZM10.93,2.17h1.08c3.2,0,3.59.01,4.85.07,1.17.06,1.81.24,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.17.42.36,1.06.41,2.22.06,1.27.07,1.64.07,4.84s-.01,3.59-.07,4.84c-.06,1.17-.24,1.8-.41,2.22-.19.52-.5.99-.9,1.38-.42.42-.82.68-1.38.9-.42.17-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.8-.24-2.22-.41-.52-.19-.99-.5-1.38-.9-.4-.39-.71-.86-.9-1.38-.17-.42-.36-1.06-.41-2.22-.06-1.27-.07-1.64-.07-4.84s.01-3.58.07-4.84c.06-1.17.24-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.42-.17,1.06-.36,2.22-.41,1.09-.04,1.52-.06,3.76-.06,0-.01,0,0,0,0ZM18.43,4.16c-.8,0-1.45.64-1.45,1.44s.64,1.44,1.45,1.44h0c.8,0,1.45-.64,1.45-1.44s-.66-1.44-1.45-1.44ZM12.02,5.83c-3.4-.06-6.21,2.67-6.26,6.07-.06,3.4,2.67,6.21,6.07,6.26h.19c3.4-.06,6.13-2.86,6.07-6.26-.06-3.32-2.73-6.01-6.07-6.07ZM12.02,8c2.21,0,4,1.79,4,4s-1.79,4-4,4h0c-2.21,0-4-1.79-4-4s1.78-4,4-4Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M12.02,0C8.75,0,8.34.01,7.06.07c-1.28.07-2.16.27-2.91.57-.8.3-1.52.78-2.12,1.39-.61.6-1.08,1.32-1.39,2.12-.3.76-.5,1.63-.57,2.9-.06,1.29-.07,1.7-.07,4.96s.01,3.67.07,4.94c.06,1.28.26,2.14.56,2.91.31.79.72,1.46,1.39,2.12s1.33,1.08,2.12,1.39c.77.3,1.63.5,2.91.56,1.29.07,1.7.08,4.96.08s3.67-.01,4.95-.07,2.16-.26,2.91-.56c.8-.3,1.52-.78,2.12-1.39.67-.67,1.08-1.33,1.39-2.12.3-.77.5-1.63.56-2.91s.07-1.69.07-4.94-.01-3.67-.07-4.94-.27-2.14-.56-2.91c-.3-.8-.78-1.52-1.39-2.12-.6-.61-1.32-1.09-2.12-1.39-.77-.3-1.63-.5-2.91-.56-1.27-.08-1.68-.09-4.94-.09h0ZM10.93,2.17h1.08c3.2,0,3.59.01,4.85.07,1.17.06,1.81.24,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.17.42.36,1.06.41,2.22.06,1.27.07,1.64.07,4.84s-.01,3.59-.07,4.84c-.06,1.17-.24,1.8-.41,2.22-.19.52-.5.99-.9,1.38-.42.42-.82.68-1.38.9-.42.17-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.8-.24-2.22-.41-.52-.19-.99-.5-1.38-.9-.4-.39-.71-.86-.9-1.38-.17-.42-.36-1.06-.41-2.22-.06-1.27-.07-1.64-.07-4.84s.01-3.58.07-4.84c.06-1.17.24-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.42-.17,1.06-.36,2.22-.41,1.09-.04,1.52-.06,3.76-.06,0-.01,0,0,0,0ZM18.43,4.16c-.8,0-1.45.64-1.45,1.44s.64,1.44,1.45,1.44h0c.8,0,1.45-.64,1.45-1.44s-.66-1.44-1.45-1.44ZM12.02,5.83c-3.4-.06-6.21,2.67-6.26,6.07-.06,3.4,2.67,6.21,6.07,6.26h.19c3.4-.06,6.13-2.86,6.07-6.26-.06-3.32-2.73-6.01-6.07-6.07ZM12.02,8c2.21,0,4,1.79,4,4s-1.79,4-4,4h0c-2.21,0-4-1.79-4-4s1.78-4,4-4Z"/>
            </svg>`,
    },
    {
      name: 'linkedin',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M0,1.72C0,.77.79,0,1.77,0h20.47c.98,0,1.77.77,1.77,1.72v20.56c0,.94-.79,1.72-1.77,1.72H1.77c-.98-.01-1.77-.78-1.77-1.73V1.72ZM7.41,20.08v-10.82h-3.6v10.83h3.6s0-.01,0-.01ZM5.61,7.78c1.26,0,2.03-.83,2.03-1.87-.02-1.07-.78-1.87-2.01-1.87s-2.03.81-2.03,1.87.78,1.87,1.99,1.87h.02ZM12.97,20.08v-6.06c0-.32.02-.64.12-.88.26-.64.86-1.32,1.84-1.32,1.3,0,1.82.99,1.82,2.46v5.8h3.6v-6.21c0-3.33-1.78-4.88-4.14-4.88-1.91,0-2.77,1.04-3.24,1.79v.03h-.02s.01-.02.02-.03v-1.52h-3.59c.04,1.02,0,10.83,0,10.83h3.59s0-.01,0-.01Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0,1.72C0,.77.79,0,1.77,0h20.47c.98,0,1.77.77,1.77,1.72v20.56c0,.94-.79,1.72-1.77,1.72H1.77c-.98-.01-1.77-.78-1.77-1.73V1.72ZM7.41,20.08v-10.82h-3.6v10.83h3.6s0-.01,0-.01ZM5.61,7.78c1.26,0,2.03-.83,2.03-1.87-.02-1.07-.78-1.87-2.01-1.87s-2.03.81-2.03,1.87.78,1.87,1.99,1.87h.02ZM12.97,20.08v-6.06c0-.32.02-.64.12-.88.26-.64.86-1.32,1.84-1.32,1.3,0,1.82.99,1.82,2.46v5.8h3.6v-6.21c0-3.33-1.78-4.88-4.14-4.88-1.91,0-2.77,1.04-3.24,1.79v.03h-.02s.01-.02.02-.03v-1.52h-3.59c.04,1.02,0,10.83,0,10.83h3.59s0-.01,0-.01Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M0,1.72C0,.77.79,0,1.77,0h20.47c.98,0,1.77.77,1.77,1.72v20.56c0,.94-.79,1.72-1.77,1.72H1.77c-.98-.01-1.77-.78-1.77-1.73V1.72ZM7.41,20.08v-10.82h-3.6v10.83h3.6s0-.01,0-.01ZM5.61,7.78c1.26,0,2.03-.83,2.03-1.87-.02-1.07-.78-1.87-2.01-1.87s-2.03.81-2.03,1.87.78,1.87,1.99,1.87h.02ZM12.97,20.08v-6.06c0-.32.02-.64.12-.88.26-.64.86-1.32,1.84-1.32,1.3,0,1.82.99,1.82,2.46v5.8h3.6v-6.21c0-3.33-1.78-4.88-4.14-4.88-1.91,0-2.77,1.04-3.24,1.79v.03h-.02s.01-.02.02-.03v-1.52h-3.59c.04,1.02,0,10.83,0,10.83h3.59s0-.01,0-.01Z"/>
            </svg>`,
    },
    {
      name: 'notifications-bell',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.29,17.4v-1.03c-2.43-.5-2.24-1.86-2.24-1.86v-4.87c0-3.34-2.71-6.05-6.05-6.05-3.34,0-6.05,2.71-6.05,6.05v4.87s.19,1.36-2.24,1.86v1.03h16.58ZM15.01,17.4c0,1.66-1.35,3.01-3.01,3.01s-3.01-1.35-3.01-3.01"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.29,17.4v-1.03c-2.43-.5-2.24-1.86-2.24-1.86v-4.87c0-3.34-2.71-6.05-6.05-6.05-3.34,0-6.05,2.71-6.05,6.05v4.87s.19,1.36-2.24,1.86v1.03h16.58ZM15.01,17.4c0,1.66-1.35,3.01-3.01,3.01s-3.01-1.35-3.01-3.01"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.29,17.4v-1.03c-2.43-.5-2.24-1.86-2.24-1.86v-4.87c0-3.34-2.71-6.05-6.05-6.05-3.34,0-6.05,2.71-6.05,6.05v4.87s.19,1.36-2.24,1.86v1.03h16.58ZM15.01,17.4c0,1.66-1.35,3.01-3.01,3.01s-3.01-1.35-3.01-3.01"/>
            </svg>`,
    },
    {
      name: 'open-new',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.42,3.27h6.31v6.31M20.73,3.27l-11.67,11.67M12.08,5.38h-6.2c-1.44,0-2.61,1.17-2.61,2.61v10.13c0,1.44,1.17,2.61,2.61,2.61h10.13c1.44,0,2.61-1.17,2.61-2.61v-6.2"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.42,3.27h6.31v6.31M20.73,3.27l-11.67,11.67M12.08,5.38h-6.2c-1.44,0-2.61,1.17-2.61,2.61v10.13c0,1.44,1.17,2.61,2.61,2.61h10.13c1.44,0,2.61-1.17,2.61-2.61v-6.2"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.42,3.27h6.31v6.31M20.73,3.27l-11.67,11.67M12.08,5.38h-6.2c-1.44,0-2.61,1.17-2.61,2.61v10.13c0,1.44,1.17,2.61,2.61,2.61h10.13c1.44,0,2.61-1.17,2.61-2.61v-6.2"/>
            </svg>`,
    },
    {
      name: 'plus',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98,12h16.04M12,3.98v16.04"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98,12h16.04M12,3.98v16.04"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98,12h16.04M12,3.98v16.04"/>
            </svg>`,
    },
    {
      name: 'plus-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-4 9h8m-4-4v8"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-4 9h8m-4-4v8"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-4 9h8m-4-4v8"/>
            </svg>`,
    },
    {
      name: 'refresh',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.42,0-8,3.58-8,8s3.58,8,8,8c3.97,0,7.26-2.9,7.88-6.69"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.42,0-8,3.58-8,8s3.58,8,8,8c3.97,0,7.26-2.9,7.88-6.69"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.42,0-8,3.58-8,8s3.58,8,8,8c3.97,0,7.26-2.9,7.88-6.69"/>
            </svg>`,
    },
    {
      name: 'renew',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.26,0-7.74,3.34-7.98,7.55M3.57,20.01L3.57,14.88L8.7,14.88M3.57,14.88l2.77,2.77h0c1.45,1.45,3.45,2.35,5.66,2.35,4.26,0,7.74-3.34,7.98-7.55"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.26,0-7.74,3.34-7.98,7.55M3.57,20.01L3.57,14.88L8.7,14.88M3.57,14.88l2.77,2.77h0c1.45,1.45,3.45,2.35,5.66,2.35,4.26,0,7.74-3.34,7.98-7.55"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.26,0-7.74,3.34-7.98,7.55M3.57,20.01L3.57,14.88L8.7,14.88M3.57,14.88l2.77,2.77h0c1.45,1.45,3.45,2.35,5.66,2.35,4.26,0,7.74-3.34,7.98-7.55"/>
            </svg>`,
    },
    {
      name: 'search',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
            </svg>`,
    },
    {
      name: 'upload',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.57,8.94l5.43-5.43,5.43,5.43M12,3.51v12.48M21.53,15.75v2.24c0,1.38-1.12,2.5-2.5,2.5H4.97c-1.38,0-2.5-1.12-2.5-2.5v-2.24"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.57,8.94l5.43-5.43,5.43,5.43M12,3.51v12.48M21.53,15.75v2.24c0,1.38-1.12,2.5-2.5,2.5H4.97c-1.38,0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.57,8.94l5.43-5.43,5.43,5.43M12,3.51v12.48M21.53,15.75v2.24c0,1.38-1.12,2.5-2.5,2.5H4.97c-1.38,0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
    },
    {
      name: 'x',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M14.23,10.16L22.98,0h-2.07l-7.59,8.82L7.25,0H.26l9.17,13.34L.26,24h2.07l8.02-9.32,6.4,9.32h6.99l-9.51-13.84h0ZM11.4,13.46l-.93-1.33L3.07,1.56h3.18l5.96,8.53.93,1.33,7.75,11.09h-3.18l-6.33-9.05h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.01,10.34L21.88,1.2h-1.86l-6.83,7.94L7.73,1.2H1.43l8.25,12.01L1.43,22.8h1.86l7.22-8.39,5.76,8.39h6.29l-8.56-12.46h0ZM11.46,13.31l-.84-1.2L3.96,2.6h2.86l5.36,7.68.84,1.2,6.97,9.98h-2.86l-5.7-8.15h.02Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M14.01,10.34L21.88,1.2h-1.86l-6.83,7.94L7.73,1.2H1.43l8.25,12.01L1.43,22.8h1.86l7.22-8.39,5.76,8.39h6.29l-8.56-12.46h0ZM11.46,13.31l-.84-1.2L3.96,2.6h2.86l5.36,7.68.84,1.2,6.97,9.98h-2.86l-5.7-8.15h.02Z"/>
            </svg>`,
    },
    {
      name: 'x-close',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.7,18.3l12.6-12.6M5.7,5.7l12.6,12.6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.7,18.3l12.6-12.6M5.7,5.7l12.6,12.6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.7,18.3l12.6-12.6M5.7,5.7l12.6,12.6"/>
            </svg>`,
    },
    {
      name: 'x-close-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 0.75a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-2.83 6.17l5.66 5.66m0-5.66l-5.66 5.66"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 0.75a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-2.83 6.17l5.66 5.66m0-5.66l-5.66 5.66"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 0.75a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-2.83 6.17l5.66 5.66m0-5.66l-5.66 5.66"/>
            </svg>`,
    },
    {
      name: 'youtube',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M12.08,3.57h.13c1.23,0,7.48.05,9.17.5,1.04.28,1.84,1.09,2.12,2.13.15.57.26,1.32.33,2.1l.02.16.03.39v.16c.11,1.37.12,2.66.12,2.94v.11c0,.29-.02,1.66-.12,3.09v.16s-.03.16-.03.16c-.08.86-.19,1.71-.35,2.34-.28,1.04-1.09,1.85-2.12,2.13-1.74.47-8.35.5-9.27.5h-.21c-.46,0-2.38,0-4.39-.08h-.26s-.13-.01-.13-.01h-.26s-.26-.02-.26-.02c-1.67-.07-3.25-.19-3.98-.39-1.04-.28-1.85-1.09-2.12-2.13-.17-.63-.28-1.48-.35-2.34v-.16s-.02-.16-.02-.16c-.07-1.02-.12-2.04-.12-3.05v-.18c0-.32.02-1.44.1-2.67v-.15s.01-.08.01-.08v-.16s.05-.39.05-.39l.02-.16c.07-.78.18-1.53.33-2.1.28-1.04,1.09-1.85,2.12-2.13.73-.2,2.32-.32,3.98-.39h.26s.26-.02.26-.02h.13s.26-.01.26-.01c1.43-.05,2.86-.07,4.28-.08h.29ZM9.6,8.39v7.23l6.24-3.61s-6.24-3.62-6.24-3.62Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.08,3.57h.13c1.23,0,7.48.05,9.17.5,1.04.28,1.84,1.09,2.12,2.13.15.57.26,1.32.33,2.1l.02.16.03.39v.16c.11,1.37.12,2.66.12,2.94v.11c0,.29-.02,1.66-.12,3.09v.16s-.03.16-.03.16c-.08.86-.19,1.71-.35,2.34-.28,1.04-1.09,1.85-2.12,2.13-1.74.47-8.35.5-9.27.5h-.21c-.46,0-2.38,0-4.39-.08h-.26s-.13-.01-.13-.01h-.26s-.26-.02-.26-.02c-1.67-.07-3.25-.19-3.98-.39-1.04-.28-1.85-1.09-2.12-2.13-.17-.63-.28-1.48-.35-2.34v-.16s-.02-.16-.02-.16c-.07-1.02-.12-2.04-.12-3.05v-.18c0-.32.02-1.44.1-2.67v-.15s.01-.08.01-.08v-.16s.05-.39.05-.39l.02-.16c.07-.78.18-1.53.33-2.1.28-1.04,1.09-1.85,2.12-2.13.73-.2,2.32-.32,3.98-.39h.26s.26-.02.26-.02h.13s.26-.01.26-.01c1.43-.05,2.86-.07,4.28-.08h.29ZM9.6,8.39v7.23l6.24-3.61s-6.24-3.62-6.24-3.62Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M12.08,3.57h.13c1.23,0,7.48.05,9.17.5,1.04.28,1.84,1.09,2.12,2.13.15.57.26,1.32.33,2.1l.02.16.03.39v.16c.11,1.37.12,2.66.12,2.94v.11c0,.29-.02,1.66-.12,3.09v.16s-.03.16-.03.16c-.08.86-.19,1.71-.35,2.34-.28,1.04-1.09,1.85-2.12,2.13-1.74.47-8.35.5-9.27.5h-.21c-.46,0-2.38,0-4.39-.08h-.26s-.13-.01-.13-.01h-.26s-.26-.02-.26-.02c-1.67-.07-3.25-.19-3.98-.39-1.04-.28-1.85-1.09-2.12-2.13-.17-.63-.28-1.48-.35-2.34v-.16s-.02-.16-.02-.16c-.07-1.02-.12-2.04-.12-3.05v-.18c0-.32.02-1.44.1-2.67v-.15s.01-.08.01-.08v-.16s.05-.39.05-.39l.02-.16c.07-.78.18-1.53.33-2.1.28-1.04,1.09-1.85,2.12-2.13.73-.2,2.32-.32,3.98-.39h.26s.26-.02.26-.02h.13s.26-.01.26-.01c1.43-.05,2.86-.07,4.28-.08h.29ZM9.6,8.39v7.23l6.24-3.61s-6.24-3.62-6.24-3.62Z"/>
            </svg>`,
    },
  ];

  const copyToClipboard = async (icon: Icon, type: 'svg' | 'jsx') => {
    const value = type === 'svg' ? icon.svg : icon.jsx;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = value;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextArea);
    }

    setCopiedName(icon.name);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedName(null);
      setCopiedType(null);
    }, 1000);
  };

  const icons = reverse ? [...iconsArray].reverse() : iconsArray;
  
  const activeQuery = (query ?? searchQuery).toLowerCase();

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(activeQuery)
  );

  return (
    <>
      {showSearch && variant !== 'preview' && variant !== 'single-column' && (
        <div className="pb-5 sm:pb-10 flex items-center">
          <div className="mx-auto flex items-center justify-end lg:w-1/3 rounded-full py-2 px-4 w-full border border-black/15 dark:border-white/15">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent ml-2 outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className={variant === 'single-column' ? 'grid grid-cols-1 gap-2' : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2'}>
        {filteredIcons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center justify-center py-4 px-1 bg-white rounded-2xl dark:bg-[#1a1a1a]">
            <div className="py-4 text-black dark:text-white">{icon.renderedicon}</div>
            <span className="text-xs my-2 text-black/55 dark:text-white/55">{icon.name}</span>
            <div className="flex justify-between items-center">
              <IconCopyButton
                label="SVG"
                copied={copiedName === icon.name && copiedType === 'svg'}
                onClick={() => copyToClipboard(icon, 'svg')}
              />
              <IconCopyButton
                label="JSX"
                copied={copiedName === icon.name && copiedType === 'jsx'}
                onClick={() => copyToClipboard(icon, 'jsx')}
              />
            </div>
          </div>
        ))}
      </div>
      {filteredIcons.length === 0 && (
        <p className="py-16 text-center text-sm text-black/45 dark:text-white/45">No icons match that search.</p>
      )}
    </>
  );
};

export default Icons;
