'use client'

import { useState } from 'react';

interface BranchLocation {
  name: string;
  address: string;
  placeId: string;
  lat: number;
  lng: number;
}

const branches: BranchLocation[] = [
  {
    name: 'Anna Nagar, Chennai',
    address: '123 Anna Salai, Anna Nagar, Chennai, Tamil Nadu 600040',
    placeId: 'ChIJ7d8J8J8J8J8J8J8J8J8J8J8',
    lat: 13.0850,
    lng: 80.2101,
  },
  {
    name: 'Velachery, Chennai',
    address: '456 Velachery Main Road, Velachery, Chennai, Tamil Nadu 600042',
    placeId: 'ChIJ8J8J8J8J8J8J8J8J8J8J8J8',
    lat: 12.9750,
    lng: 80.2200,
  },
  {
    name: 'T. Nagar, Chennai',
    address: '789 Usman Road, T. Nagar, Chennai, Tamil Nadu 600017',
    placeId: 'ChIJ9J8J8J8J8J8J8J8J8J8J8J8',
    lat: 13.0418,
    lng: 80.2341,
  },
  {
    name: 'Tambaram, Chennai',
    address: '321 GST Road, Tambaram, Chennai, Tamil Nadu 600045',
    placeId: 'ChIJ0J8J8J8J8J8J8J8J8J8J8J8',
    lat: 12.9260,
    lng: 80.1200,
  },
  {
    name: 'Coimbatore',
    address: '555 Avinashi Road, Coimbatore, Tamil Nadu 641018',
    placeId: 'ChIJ1J8J8J8J8J8J8J8J8J8J8J8',
    lat: 11.0168,
    lng: 76.9558,
  },
  {
    name: 'Madurai',
    address: '777 By-pass Road, Madurai, Tamil Nadu 625010',
    placeId: 'ChIJ2J8J8J8J8J8J8J8J8J8J8J8',
    lat: 9.9252,
    lng: 78.1198,
  },
  {
    name: 'Salem',
    address: '999 Omalur Road, Salem, Tamil Nadu 636004',
    placeId: 'ChIJ3J8J8J8J8J8J8J8J8J8J8J8',
    lat: 11.6643,
    lng: 78.1460,
  },
  {
    name: 'Trichy',
    address: '111 Salai Road, Trichy, Tamil Nadu 620001',
    placeId: 'ChIJ4J8J8J8J8J8J8J8J8J8J8J8',
    lat: 10.7905,
    lng: 78.7047,
  },
  {
    name: 'Puducherry',
    address: '222 Mission Street, Puducherry 605001',
    placeId: 'ChIJ5J8J8J8J8J8J8J8J8J8J8J8',
    lat: 11.9416,
    lng: 79.8083,
  },
  {
    name: 'Bangalore',
    address: '333 MG Road, Bangalore, Karnataka 560001',
    placeId: 'ChIJ6J8J8J8J8J8J8J8J8J8J8J8',
    lat: 12.9716,
    lng: 77.5946,
  },
];

export function GoogleMapsReviews({ branchName }: { branchName?: string }) {
  const [selectedBranch, setSelectedBranch] = useState<BranchLocation>(
    branches.find(b => b.name === branchName) || branches[0]
  );
  const [showMap, setShowMap] = useState(false);

  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=place_id:${selectedBranch.placeId}`;

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4">
        <h2 id="reviews-heading" className="text-2xl font-bold text-center mb-8">
          {branchName ? `Reviews for ${branchName}` : 'Our Branches on Google Maps'}
        </h2>

        <div className="mb-8 flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Select branch">
          {branches.map((branch) => (
            <button
              key={branch.name}
              onClick={() => setSelectedBranch(branch)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedBranch.name === branch.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
              role="tab"
              aria-selected={selectedBranch.name === branch.name}
            >
              {branch.name}
            </button>
          ))}
        </div>

        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-100">
          {showMap ? (
            <iframe
              title={`Google Maps - ${selectedBranch.name}`}
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          ) : (
            <button
              onClick={() => setShowMap(true)}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors p-8"
              aria-label={`Load Google Maps for ${selectedBranch.name}`}
            >
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 12a7.975 7.975 0 01-2.343 6.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              <span className="font-medium">Click to load Google Maps</span>
              <p className="text-sm text-gray-500">
                {selectedBranch.address}
              </p>
            </button>
          )}
        </div>

        <div className="mt-6 text-center">
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${selectedBranch.placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 12a7.975 7.975 0 01-2.343 6.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            View All Reviews on Google Maps
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Opens in new tab → See all reviews, photos, and ratings
          </p>
        </div>
      </div>
    </section>
  );
}