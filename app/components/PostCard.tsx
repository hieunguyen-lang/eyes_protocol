import { TablePostData } from '../types';

type PostCardProps = {
  post: TablePostData & { image_url?: string | null };
};
const iconMap: Record<string, string> = {
  facebook: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
  instagram: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
  twitter: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
  linkedin: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
};
export default function PostCard({ post }: PostCardProps) {
  const iconUrl = post.type ? iconMap[post.type.toLowerCase()] : null;
  
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-4 mb-6 pt-8 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      {/* Icon góc trái trên, đặt âm margin để icon "tràn" ra ngoài */}
      {iconUrl && (
        <img
          src={iconUrl}
          alt={post.type}
          className="absolute top-0 left-0 w-6 h-6 rounded-full shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
          style={{ boxShadow: '0 0 6px rgba(0,0,0,0.15)' }}
        />
      )}

      {/* Nội dung khác */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span className="font-medium text-blue-600">{post.name}</span>
        <span>{post.content_created}</span>
      </div>

      <div className="text-gray-800 mb-3 whitespace-pre-line">
        {post.content}
      </div>

      {post.image_url && (
        <img
          src={post.image_url}
          alt="Post image"
          className="w-full h-auto rounded-xl mb-3"
        />
      )}

      {/* Footer sát đáy có padding-bottom nhẹ */}
      <div className="text-sm text-gray-500 flex justify-between items-center border-t pt-2 pb-3">
        <span>👍 {post.reaction_count}</span>
        <span>💬 {post.comment_count}</span>
        <span>🔁 {post.share_count}</span>
        <a
          href={post.posturl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-auto"
        >
          Xem bài viết
        </a>
      </div>
    </div>

  );
}

