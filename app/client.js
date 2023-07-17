import { getClient } from 'next/client';

export default function ClientComponent() {
  getClient();
  return null;
}