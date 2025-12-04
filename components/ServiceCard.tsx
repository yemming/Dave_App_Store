import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { Service } from '@/data/mockData';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={service.images[0] || 'https://via.placeholder.com/400x300'}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Status */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
              {service.category}
            </span>
            {service.status === 'active' && (
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                服務中
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Provider Info */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src={service.providerAvatar}
                alt={service.providerName}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-sm text-gray-600">{service.providerName}</span>
          </div>

          {/* Rating & Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-secondary">
                {service.rating}
              </span>
              <span className="text-sm text-gray-500">
                ({service.reviewCount})
              </span>
            </div>
            <div className="text-lg font-bold text-primary">
              NT$ {service.price.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

