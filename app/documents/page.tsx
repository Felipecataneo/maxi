// app/documents/page.tsx
import { documentsData, DocumentItem } from '@/lib/documentsData'; // Import dummy data
import { Search, Folder, Star, MoreVertical, ArrowUpDown, ArrowDown } from 'lucide-react'; // Import icons

export default function DocumentsPage() {
  return (
    <div className="bg-gray-50 min-h-screen"> {/* Light grey background, ensure min height */}
      <div className="container mx-auto px-4 py-16 md:py-24"> {/* Consistent padding */}

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-serif font-normal text-gray-900 mb-8">
          Arquivos e pastas
        </h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center md:justify-start"> {/* Center on mobile, left on desktop */}
          <div className="relative w-full max-w-md"> {/* Limit max width */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" /> {/* Search icon inside */}
            <input
              type="text"
              placeholder="Buscar 'Arquivos e pastas'..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>
        </div>

        {/* Documents Table/List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"> {/* White background card for the table */}
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Header */}
            <thead className="bg-gray-50"> {/* Light header background */}
              <tr>
                {/* Checkbox column - centered */}
                <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                </th>
                {/* Nome do item column */}
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome do item
                </th>
                {/* Última atualização column */}
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                  Última atual... <ArrowDown className="ml-1 size-3 inline" /> {/* Sorting icon */}
                </th>
                {/* Visualizações column */}
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Visualizações
                </th>
                {/* Favoritos column */}
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Favoritos
                </th>
                {/* Colaboradores column */}
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                  Colaboradores <ArrowUpDown className="ml-1 size-3 inline" /> {/* Sorting icon */}
                </th>
                 {/* Options column */}
                 <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                   {/* Empty header for options icon */}
                 </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {documentsData.map((item: DocumentItem) => (
                <tr key={item.id}>
                  {/* Checkbox cell */}
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  </td>
                  {/* Nome do item cell (with icon and item count) */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      {/* Folder icon */}
                      {item.type === 'folder' && <Folder className="size-5 text-gray-500 mr-2" />}
                      {/* File icon could go here */}
                      {/* Item Name and Count */}
                      <div>
                         <div className="text-sm font-medium text-gray-900 italic">{item.name}</div> {/* Apply italic */}
                         {item.type === 'folder' && (
                           <div className="text-xs text-gray-500">{item.itemCount} item{item.itemCount !== 1 ? 's' : ''}</div> 
                         )}
                      </div>
                    </div>
                  </td>
                  {/* Última atualização cell */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.lastModified}
                  </td>
                  {/* Visualizações cell */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.views}
                  </td>
                  {/* Favoritos cell */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                       <Star className={`size-4 mr-1 ${item.favorites > 0 ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} /> {/* Star icon */}
                       {item.favorites}
                    </div>
                  </td>
                  {/* Colaboradores cell */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.collaborators.length > 0 && (
                        <div className="flex items-center">
                           {/* Simple collaborator indicator */}
                           <div className="size-5 md:size-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                             {item.collaborators[0].charAt(0).toUpperCase()} {/* First initial of the first collaborator */}
                           </div>
                           <span className="text-gray-600 text-xs md:text-sm">{item.collaborators[0]}</span> {/* Collaborator text */}
                        </div>
                    )}
                  </td>
                   {/* Options cell */}
                   <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                     {/* Options menu icon */}
                     <MoreVertical className="size-5 text-gray-500 cursor-pointer hover:text-gray-900" />
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}