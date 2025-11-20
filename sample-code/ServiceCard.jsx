// Sample Service Card Component
// Demonstrates UI component structure and styling patterns
// Uses placeholder content only

'use client';

export function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        {icon && (
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="mt-4">
        <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

// Example usage with placeholder data
export function ServiceCardExample() {
  const services = [
    {
      title: 'Residential Services',
      description: 'Complete electrical services for homes including panel upgrades, outlet installation, and lighting solutions.',
      icon: '🏠'
    },
    {
      title: 'Commercial Services',
      description: 'Professional electrical work for businesses including office wiring, commercial lighting, and electrical maintenance.',
      icon: '🏢'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
}

