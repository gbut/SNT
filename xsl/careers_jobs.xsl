<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    
  <xsl:for-each select="joblist/category">
    <xsl:choose>
    	<xsl:when test="@name = 'hot jobs'">
    		<h3><span class="category">Hot Jobs</span></h3>
    	</xsl:when>
    	<xsl:otherwise>
    		<h3><span class="category"><xsl:value-of select="@name" /></span> Positions</h3>
    	</xsl:otherwise>
    </xsl:choose>
    <xsl:for-each select="job">
      
      <article>
        <time datetime="{date}"><xsl:value-of select="date" /></time>
        <h4 class="clearfix">
          <a href="/careers/jobs/job.asp?req={requisitionid}" title="{title}"><xsl:value-of select="title" /></a>
          <xsl:for-each select="region[position() = last()]">
            <span class="region"><xsl:value-of select="self::node()" /></span>
          </xsl:for-each>
        </h4>
      </article>
      
    </xsl:for-each>
    
  </xsl:for-each>
  
</xsl:template>

</xsl:stylesheet>