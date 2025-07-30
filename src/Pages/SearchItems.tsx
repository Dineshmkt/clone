
import { useQuery } from "@tanstack/react-query"
import { SectionData } from "../data/SectionData";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type SectionDataType = typeof SectionData;


type Suggestion = {
  type: 'product' | 'category' | 'history';
  text: string;
  image?: string;
  category?: string;
};

const fetchProduct = async (): Promise<SectionDataType> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SectionData), 500);
  });
};

const SearchItems = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const searchRef = useRef<HTMLInputElement>(null)
  const suggestionRef = useRef<HTMLDivElement>(null)
  const [value,setValue]=useState<string[]>([])

  
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('zeptoSearchHistory') || '[]')
    setSearchHistory(history)
  }, [])


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchItems"],
    queryFn: fetchProduct
  })
  
  useEffect(()=>{
     const timeOver= setTimeout(()=>{
        if(search.trim()){
          setValue((prev)=>{
             const update=[search,...prev.filter((value)=>value!=search)]
             return update.slice(0,5)
          })
        }
     },3000);
     return ()=>clearTimeout(timeOver)
  },[search])

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Error fetching product.</div>;


  const getSuggestions = (): Suggestion[] => {
    if (!search.trim()) return searchHistory.slice(0, 5).map(item => ({ type: 'history', text: item }))
    
    const suggestions: Suggestion[] = []
    const addedItems = new Set<string>()
    
   
    data?.forEach(item => {
      const searchTerm = search.toLowerCase()
      
      
      if (item.name && item.name.toLowerCase().includes(searchTerm) && !addedItems.has(item.name)) {
        suggestions.push({
          type: 'product',
          text: item.name,
          image: item.image || '',
          category: item.category || ''
        })
        addedItems.add(item.name)
      }
      
      
      if (item.title && item.title.toLowerCase().includes(searchTerm) && !addedItems.has(item.title)) {
        suggestions.push({
          type: 'product',
          text: item.title,
          image: item.image || '',
          category: item.category || ''
        })
        addedItems.add(item.title)
      }
      
    
      if (item.category && item.category.toLowerCase().includes(searchTerm) && !addedItems.has(item.category)) {
        suggestions.push({
          type: 'category',
          text: item.category,
          image: item.image || ''
        })
        addedItems.add(item.category)
      }
    })
    
    return suggestions.slice(0, 8)
  }

  const suggestions = getSuggestions()

  
  const filteredData = data ? 
    (debouncedSearch ? data.filter((value) => 
      (value.category && value.category.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
      (value.name && value.name.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
      (value.title && value.title.toLowerCase().includes(debouncedSearch.toLowerCase()))
    ) : data) : 
    [];

  const handleView = (id: number) => {
    console.log("id", id)
    navigate(`/Section/${id}`);
  };


  const handleSuggestionClick = (suggestion: Suggestion) => {
    setSearch(suggestion.text)
    setDebouncedSearch(suggestion.text)
    setShowSuggestions(false)
    addToSearchHistory(suggestion.text)
  }

  const addToSearchHistory = (searchTerm: string) => {
    if (!searchTerm.trim()) return
    const updatedHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)].slice(0, 10)
    setSearchHistory(updatedHistory)
    localStorage.setItem('zeptoSearchHistory', JSON.stringify(updatedHistory))
  }

  const clearSearchHistory = () => {
    setSearchHistory([])
    localStorage.removeItem('zeptoSearchHistory')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => prev < suggestions.length - 1 ? prev + 1 : prev)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex])
        } else if (search.trim()) {
          setShowSuggestions(false)
          addToSearchHistory(search)
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        setSelectedIndex(-1)
        break
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    setShowSuggestions(true)
    setSelectedIndex(-1)
  }

  const handleInputFocus = () => {
    setShowSuggestions(true)
  }

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200)
  }

  const handleRecentSearchClick = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  const handleRemoveSearch = (indexToRemove: number) => {
    setValue(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="relative max-w-2xl mx-auto mb-6 mt-6">
      
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search over 5000 products..."
            value={search}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-4 py-3 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-[#d4006a] focus:ring-2 focus:ring-[#d4006a]/20 transition-all duration-200 shadow-sm"
          />
          {search && (
            <button
              onClick={() => {
                setSearch('')
                setDebouncedSearch('')
                setShowSuggestions(false)
                searchRef.current?.focus()
              }}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Search Suggestions Dropdown */}
        {showSuggestions && (
          <div 
            ref={suggestionRef}
            className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-2xl shadow-lg max-h-96 overflow-y-auto"
          >
            
            {!search.trim() && searchHistory.length > 0 && (
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Recent searches</span>
                  <button
                    onClick={clearSearchHistory}
                    className="text-xs text-[#d4006a] hover:text-[#b8005a] font-medium"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}

          
            {suggestions.length > 0 ? (
              <div className="py-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center gap-3 ${
                      index === selectedIndex ? 'bg-gray-100' : ''
                    }`}
                  >
                    {/* Product/Category Image */}
                    {suggestion.type === 'product' || suggestion.type === 'category' ? (
                      <div className="flex-shrink-0 w-8 h-8 rounded-md overflow-hidden bg-gray-100">
                        {suggestion.image ? (
                          <img 
                            src={suggestion.image} 
                            alt={suggestion.text}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium truncate">{suggestion.text}</span>
                        {suggestion.type === 'category' && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            Category
                          </span>
                        )}
                      </div>
                      {suggestion.category && suggestion.type === 'product' && (
                        <div className="text-xs text-gray-500 truncate">{suggestion.category}</div>
                      )}
                    </div>
                  </button>
                ))}
                
                 {/* Show all results option  */}
                {search.trim() && (
                  <button
                    onClick={() => {
                      setShowSuggestions(false)
                      addToSearchHistory(search)
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center gap-3 border-t border-gray-100"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-800 font-medium">
                        Show all results for
                      </div>
                      <div className="text-sm text-purple-600 font-medium truncate">
                        {search}
                      </div>
                    </div>
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            ) : search.trim() ? (
              <div className="px-4 py-8 text-center text-gray-500">
                <div className="mb-2">
                  <svg className="h-12 w-12 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-sm">No suggestions found</p>
                <p className="text-xs text-gray-400 mt-1">Try a different search term</p>
              </div>
            ) : null}
          </div>
        )}

        {/* Loading Indicator */}
        {search && search !== debouncedSearch && (
          <div className="text-sm text-gray-500 mt-2 text-center">
            <div className="inline-flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#d4006a]"></div>
              Searching...
            </div>
          </div>
        )}
      </div>
      
 {/* Recent search */}
{value.length > 0 && (
  <div className="mt-4">
    <div className="flex items-center justify-around mb-3">
      <h4 className="text-gray-800 font-medium text-sm">Recent searches</h4>
      <button 
        className="text-blue-600 text-xs font-medium"
        onClick={() => setValue([])}
      >
        Clear all
      </button>
    </div>
    
    <div className="flex flex-wrap gap-2 mx-6">
      {value.map((searchTerm, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={() => handleRecentSearchClick(searchTerm)}
        >
          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{searchTerm}</span>
          <button 
            className="text-gray-400 hover:text-gray-600 ml-1"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveSearch(index);
            }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  </div>
)}
      <div className="flex flex-wrap gap-4 mt-6 mx-16">
         
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            const discount =Number(item.originalPrice)  - Number(item.offerPrice);
            return (
              
              <div
                key={item.id}
                className="w-[170px] border p-2 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-full object-contain"
                  />
                  <button 
                    onClick={() => handleView(item.id)} 
                    className="text-[#d4006a] border border-[#d4006a] rounded-md px-4 py-1 text-sm font-semibold hover:bg-[#fff0f7] transition"
                  >
                    view
                  </button>
                </div>
                <div className="mt-3 text-sm font-semibold truncate">{item.title}</div>
                <div className="text-xs text-gray-600 truncate">{item.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-semibold">₹{item.offerPrice}</span>
                  {discount > 0 && (
                    <>
                      <span className="text-sm line-through text-gray-400">
                        ₹{item.originalPrice}
                      </span>
                      <span className="text-green-600 text-xs font-semibold">
                        ₹{discount} Off
                      </span>
                    </>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.weight}</div>
                <div className="text-xs text-gray-500">{item.time}</div>
                <div className="text-xs text-rose-600 mt-1">
                  {item.rating} ({item.reviews})
                </div>
              </div>
            );
          })
        ) : debouncedSearch ? (
          <div className="w-full text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No products found</div>
            <div className="text-gray-500 text-sm">
              Try searching for something else or check the spelling
            </div>
          </div>
        ) : null}
      </div>
 </>
   
  )
}

export default SearchItems;
