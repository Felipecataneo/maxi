// app/documents/page.tsx
import { documentsData, DocumentItem } from '@/lib/documentsData'; // Import dummy data
import { Search, Folder, FileText, Star, MoreVertical, ArrowDown, ArrowUpDown } from 'lucide-react'; // Import icons

export default function DocumentsPage() {
  return (
    <div className="bg-section-background min-h-screen py-16 md:py-24"> {/* Use section background variable and consistent padding */}
      <div className="container mx-auto px-4 max-w-5xl"> {/* Increased max-width slightly for table */}

        {/* Page Title */}
        {/* Apply font-serif from base layer, just need text color and margin */}
        <h1 className="text-3xl md:text-4xl text-gray-900 mb-8 text-center md:text-left">
          Arquivos e Pastas
        </h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center md:justify-start animate-fade-in delay-100"> {/* Add animation */}
          <div className="relative w-full max-w-xl"> {/* Limit max width, slightly wider */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" /> {/* Use muted-foreground for icon */}
            <input
              type="text"
              placeholder="Buscar 'Arquivos e pastas'..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground" // Use color variables
            />
          </div>
        </div>

        {/* Documents Table/List */}
        {/* Use card styles for the table container */}
        <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden border border-border animate-fade-in delay-200"> {/* Use card styles and add animation */}
          <div className="overflow-x-auto"> {/* Make table horizontally scrollable on small screens */}
            <table className="min-w-full divide-y divide-border">
              {/* Table Header */}
              <thead className="bg-muted/40"> {/* Use muted background with some opacity */}
                <tr>
                  {/* Checkbox column - centered */}
                  <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider w-12">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary focus:ring-primary border-border rounded" /> {/* Use primary color */}
                  </th>
                  {/* Nome do item column */}
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider min-w-40"> {/* min-w for name */}
                    Nome do item
                  </th>
                  {/* Última atualização column */}
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1"> {/* flex items-center gap-1 */}
                    Última atual... <ArrowDown className="size-3" /> {/* Sorting icon */}
                  </th>
                  {/* Visualizações column */}
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell"> {/* Hide on small screens */}
                    Visualizações
                  </th>
                  {/* Favoritos column */}
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:table-cell"> {/* Hide on extra small screens */}
                    Favoritos
                  </th>
                  {/* Colaboradores column */}
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1 hidden lg:table-cell"> {/* Hide on medium/small screens */}
                    Colaboradores <ArrowUpDown className="size-3" /> {/* Sorting icon */}
                  </th>
                   {/* Options column */}
                   <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider w-12">
                     {/* Empty header for options icon */}
                   </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-card divide-y divide-border">
                {documentsData.map((item: DocumentItem) => (
                  <tr key={item.id} className="hover:bg-muted/20 transition-colors"> {/* Add hover effect */}
                    {/* Checkbox cell */}
                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm"> {/* Adjusted padding */}
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-primary focus:ring-primary border-border rounded" />
                    </td>
                    {/* Nome do item cell (with icon and item count) */}
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground"> {/* Adjusted padding, text-foreground */}
                      <div className="flex items-center">
                        {/* Icon based on type */}
                        {item.type === 'folder' ?
                           <Folder className="size-5 text-accent-blue mr-2 shrink-0" /> // Use accent-blue
                           :
                           <FileText className="size-5 text-muted-foreground mr-2 shrink-0" /> // Use muted-foreground for file
                        }
                        {/* Item Name and Count */}
                        <div className="truncate"> {/* Add truncate for long names */}
                           <div className="text-sm font-medium text-foreground italic">{item.name}</div> {/* Apply italic */}
                           {item.type === 'folder' && (
                             <div className="text-xs text-muted-foreground">{item.itemCount} item{item.itemCount !== 1 ? 's' : ''}</div>
                           )}
                        </div>
                      </div>
                    </td>
                    {/* Última atualização cell */}
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground"> {/* Adjusted padding */}
                      {item.lastModified}
                    </td>
                    {/* Visualizações cell */}
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground hidden md:table-cell"> {/* Adjusted padding, hide on small screens */}
                      {item.views}
                    </td>
                    {/* Favoritos cell */}
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground hidden sm:table-cell"> {/* Adjusted padding, hide on extra small screens */}
                      <div className="flex items-center">
                         <Star className={`size-4 mr-1 ${item.favorites > 0 ? 'text-yellow-500 fill-current' : 'text-muted-foreground/50'}`} /> {/* Use muted-foreground/50 for empty star */}
                         {item.favorites}
                      </div>
                    </td>
                    {/* Colaboradores cell */}
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground hidden lg:table-cell"> {/* Adjusted padding, hide on medium/small screens */}
                      {item.collaborators.length > 0 && (
                          <div className="flex items-center">
                             {/* Simple collaborator indicator - more styled */}
                             <div className="size-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold mr-2 shrink-0"> {/* Use primary colors */}
                               {item.collaborators[0].charAt(0).toUpperCase()} {/* First initial */}
                             </div>
                             <span className="text-foreground text-sm truncate">{item.collaborators[0]}</span> {/* Use foreground color, truncate */}
                          </div>
                      )}
                    </td>
                     {/* Options cell */}
                     <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium"> {/* Adjusted padding */}
                       {/* Options menu icon - Placeholder, could be a dropdown */}
                       <MoreVertical className="size-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" /> {/* Use color variables, add hover */}
                     </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}